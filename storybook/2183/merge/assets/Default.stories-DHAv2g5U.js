import{j as o}from"./iframe-CxIv4jMu.js";import{B as t}from"./Button-Bv_lacgK.js";import{A as f}from"./ActionGroup-COg7tlsY.js";import{O as T}from"./OverlayTrigger-Dib8Vm9x.js";import{D as C}from"./DialogTriggerView-Dy8BHddv.js";import{f as G,P as D,N,R as O}from"./flowComponent-40FWo67L.js";import{O as _}from"./Overlay-tL7SICFg.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as F,a as W}from"./IconApp-DXeuriH2.js";import{I as b}from"./IconClose-dNHvKVk8.js";import{D as u}from"./DivView-CbK0PUxq.js";import{B as k}from"./ButtonView-Czg5mS5p.js";import{u as B}from"./useOverlayController-Bkc1EAsb.js";import{I as p}from"./Image-fa4JABjY.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-DOkebaw-.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./utils-BWuSdLWz.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./remote-BuINZUdg.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./Label-V3_Oag-T.js";import"./Hidden-BIUsGAI2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./dynamic-BljurmiM.js";import"./getActionGroupSlot-D-5616e_.js";import"./useStatic-WZbZ24So.js";import"./OverlayContextProvider-B75krDNs.js";import"./context-Di3B4AKc.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./OverlayArrow-C0nssBLY.js";import"./useControlledState-BE-Fn8Ja.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useEvent-C9rtN4FC.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=F("outline","trash","Trash",A),d=r=>o.jsx(W,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(b,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const or={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(s,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const rr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{i as Default,a as WithController,m as WithImageTrigger,c as WithoutFitScreen,rr as __namedExportsOrder,or as default};
