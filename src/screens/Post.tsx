import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { ProgressBar } from '../components/ProgressBar';

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export function Post() {
  const [percentValue, setPercentValue] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const dimensions = useWindowDimensions();

  const handleMoveToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const scrollPercent = ({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: ScrollProps) => {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );
    const value = Math.round(
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100
    );
    setPercentValue(value < visibleContent ? 0 : value);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => scrollPercent(e.nativeEvent)}
        scrollEventThrottle={16} // IOS
      >
        <Text style={styles.title}>Lorem, ipsum.</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          nisi molestiae placeat aliquid recusandae consequuntur cupiditate
          doloribus illum, in praesentium ut autem dolor at voluptatum, illo
          commodi ab quaerat atque?
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum odit
          quasi, eveniet quis dolores ipsa quos exercitationem saepe minima
          accusamus, tempora magni, dolorem natus! Ex earum corrupti consequatur
          soluta laudantium provident expedita voluptas. Impedit aut,
          perferendis corrupti, odio dolores excepturi ipsa facilis amet sint
          ab, alias ducimus id necessitatibus aliquam.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto vero ipsam, ratione temporibus in maxime iste illo quaerat,
          consequuntur quae eligendi iusto exercitationem nihil assumenda enim
          alias quod. Quam.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          praesentium natus quibusdam delectus velit rerum dolorem laudantium
          expedita. Inventore laudantium, nihil, voluptas iusto earum saepe
          itaque temporibus vitae exercitationem et quaerat laboriosam excepturi
          in nobis harum error nam doloremque! Cumque, dolores magnam autem
          mollitia, corporis aut incidunt eligendi itaque aliquam sunt officiis
          voluptas ratione optio nisi saepe atque illum maiores officia illo.
          Similique facere alias quos error, aut distinctio inventore, ab saepe
          vero expedita ad obcaecati itaque magni doloribus. Voluptate neque,
          eligendi unde tempora animi assumenda soluta illum doloremque optio
          quibusdam saepe, laboriosam, praesentium dignissimos dolor. Aspernatur
          ipsa maiores quae.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          nisi molestiae placeat aliquid recusandae consequuntur cupiditate
          doloribus illum, in praesentium ut autem dolor at voluptatum, illo
          commodi ab quaerat atque?
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum odit
          quasi, eveniet quis dolores ipsa quos exercitationem saepe minima
          accusamus, tempora magni, dolorem natus! Ex earum corrupti consequatur
          soluta laudantium provident expedita voluptas. Impedit aut,
          perferendis corrupti, odio dolores excepturi ipsa facilis amet sint
          ab, alias ducimus id necessitatibus aliquam.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto vero ipsam, ratione temporibus in maxime iste illo quaerat,
          consequuntur quae eligendi iusto exercitationem nihil assumenda enim
          alias quod. Quam.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          praesentium natus quibusdam delectus velit rerum dolorem laudantium
          expedita. Inventore laudantium, nihil, voluptas iusto earum saepe
          itaque temporibus vitae exercitationem et quaerat laboriosam excepturi
          in nobis harum error nam doloremque! Cumque, dolores magnam autem
          mollitia, corporis aut incidunt eligendi itaque aliquam sunt officiis
          voluptas ratione optio nisi saepe atque illum maiores officia illo.
          Similique facere alias quos error, aut distinctio inventore, ab saepe
          vero expedita ad obcaecati itaque magni doloribus. Voluptate neque,
          eligendi unde tempora animi assumenda soluta illum doloremque optio
          quibusdam saepe, laboriosam, praesentium dignissimos dolor. Aspernatur
          ipsa maiores quae.
        </Text>
      </ScrollView>

      <ProgressBar value={percentValue} onMoveToTop={handleMoveToTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 32,
  },
  content: {
    paddingTop: 48,
  },
  title: {
    fontSize: 32,
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#f0f0f0',
    marginVertical: 12,
  },
});
