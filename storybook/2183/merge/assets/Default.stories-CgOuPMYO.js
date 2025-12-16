import{j as o}from"./iframe-CgbY6Bes.js";import{B as t}from"./Button-AhSsxt5Y.js";import{A as f}from"./ActionGroup-CWjy7TJK.js";import{O as T}from"./OverlayTrigger-CrSGYObS.js";import{D as C}from"./DialogTriggerView-0KCbtERx.js";import{f as G,P as D,N,R as O}from"./PropsContextProvider-CTdpdvjF.js";import{O as _}from"./TranslationProvider-BcRRsHoV.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as b,b as F}from"./IconChevronDown-BgfzzCeX.js";import{I as W}from"./IconClose-uPOAYLU1.js";import{D as u}from"./DivView-C7hFzKtE.js";import{B as k}from"./ButtonView-BH9JVKnL.js";import{u as B}from"./useOverlayController-BuHPrhsh.js";import{I as l}from"./Image-Bkn-kTY5.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-C-IJ7ayO.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7mjZSuw.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./remote-VFFVCOtz.js";import"./dynamic-eD-KrC4d.js";import"./getActionGroupSlot-DScHYJoT.js";import"./useStatic-YWRRTJxv.js";import"./OverlayContextProvider-BX16aSJY.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./Activity-CqdR7Ddt.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=b("outline","trash","Trash",A),d=r=>o.jsx(F,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(W,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const Eo={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(l,{src:p.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(l,{src:p.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(l,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),o.jsx(s,{children:o.jsx(l,{alt:"Gopher",src:p.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("LightBox");
    return <>
        <Button onPress={controller.open}>Open LightBox</Button>
        <LightBox {...props} controller={controller}>
          <Image src={dummyText.imageSrc} />
          <ActionGroup>
            <Button>
              <IconDownload />
            </Button>
            <Button>
              <IconDelete />
            </Button>
          </ActionGroup>
        </LightBox>
      </>;
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};const qo=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{i as Default,a as WithController,m as WithImageTrigger,c as WithoutFitScreen,qo as __namedExportsOrder,Eo as default};
