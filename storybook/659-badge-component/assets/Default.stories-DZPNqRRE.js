import{R as e}from"./index-Cs7sjTYM.js";import{c as ee}from"./clsx-B-dksMZM.js";import{P as re}from"./PropsContextProvider-BmJWDS_p.js";import{f as ae}from"./flowComponent-BhQARXCG.js";import{B as C}from"./Button-B76rtY3R.js";import"./IconApp-CtALKRUq.js";import{l as te}from"./IconWarning-_gxAMnYu.js";import{T as n}from"./Text-CtA3VFUU.js";import{L as o}from"./Label-Dqjizk5T.js";import{C as ne,M as B}from"./ContextMenuTrigger-DMkl6aQ1.js";import{u as oe}from"./OverlayTrigger-ChEattJQ.js";import{a as se,s as le}from"./storyBackgrounds-BHxp8d-8.js";const ce="flow--badge",de="flow--badge--content",pe="flow--badge--button",me="flow--badge--close",ue="flow--badge--scope",ge="flow--badge--value",ie="flow--badge--neutral",be="flow--badge--disabled",fe="flow--badge--blue",Ee="flow--badge--navy",xe="flow--badge--violet",Se="flow--badge--teal",Ce="flow--badge--lilac",Be="flow--badge--green",he="flow--badge--orange",Te="flow--badge--red",ye="flow--badge--dark",Le="flow--badge--light",t={badge:ce,content:de,button:pe,close:me,scope:ue,value:ge,neutral:ie,disabled:be,blue:fe,navy:Ee,violet:xe,teal:Se,lilac:Ce,green:Be,orange:he,red:Te,dark:ye,light:Le},Pe=["neutral","blue","navy","violet","teal","lilac","green","orange","red","dark","light"],a=ae("Badge",r=>{const{children:s,className:f,color:U="neutral",refProp:X,onPress:E,onClose:S,isDisabled:x,...Y}=r,Z=ee(t.badge,t[U],x&&t.disabled,f),$={Label:{elementType:"span",className:t.scope,unstyled:!0},Text:{elementType:"span",className:t.value},Button:{Label:{elementType:"span",className:t.scope,unstyled:!0},Text:{elementType:"span",className:t.value}}};return e.createElement(re,{props:$},e.createElement("div",{className:Z,...Y,ref:X},!E&&e.createElement("div",{className:t.content},s),E&&e.createElement(C,{isDisabled:x,unstyled:!0,className:t.button,onPress:E},s),S&&e.createElement(C,{className:t.close,size:"s",color:"dark",variant:"plain",onPress:S,isDisabled:x},e.createElement(te,null))))});a.__docgenInfo={description:"",methods:[],displayName:"Badge"};const ve={title:"Status/Badge",component:a,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:Pe}},render:r=>e.createElement(a,{...r},"Value")},l={},c={render:r=>e.createElement(a,{...r},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value"))},d={render:r=>e.createElement(a,{...r,onPress:()=>{alert("pressed!")}},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value"))},p={render:r=>e.createElement(a,{...r,onClose:()=>{alert("closed!")}},"Value")},m={render:r=>e.createElement(a,{...r,onClose:()=>{alert("closed!")}},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value"))},u={render:r=>e.createElement(a,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")}},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value"))},g={render:r=>{const s=oe("ContextMenu"),f=e.useRef(null);return e.createElement(e.Fragment,null,e.createElement(a,{ref:f,onPress:s.open,...r},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value")),e.createElement(ne,{controller:s,triggerRef:f},e.createElement(B,null,"Item 1"),e.createElement(B,null,"Item 2")))}},i={args:{color:"light"},render:r=>e.createElement(a,{...r,onPress:()=>{alert("pressed!")}},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value")),parameters:{backgrounds:se}},b={args:{color:"dark"},render:r=>e.createElement(a,{...r,onPress:()=>{alert("pressed!")}},e.createElement(o,null,"Scope"),e.createElement(n,null,"Value")),parameters:{backgrounds:le}};var h,T,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var L,P,v;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(v=(P=c.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var k,w,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var O,M,N;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var W,I,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var R,_,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var j,z,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("ContextMenu");
    const triggerRef = React.useRef(null);
    return <>
        <Badge ref={triggerRef} onPress={controller.open} {...props}>
          <Label>Scope</Label>
          <Text>Value</Text>
        </Badge>
        <ContextMenu controller={controller} triggerRef={triggerRef}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </ContextMenu>
      </>;
  }
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var q,G,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ke=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"],ze=Object.freeze(Object.defineProperty({__proto__:null,Dark:b,Default:l,Light:i,WithContextMenu:g,WithOnClose:p,WithOnPress:d,WithOnPressAndOnClose:u,WithScope:c,WithScopeAndOnClose:m,__namedExportsOrder:ke,default:ve},Symbol.toStringTag,{value:"Module"}));export{a as B,ze as D,ve as m};
