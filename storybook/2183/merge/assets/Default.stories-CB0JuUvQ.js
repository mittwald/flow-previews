import{j as o}from"./iframe-ZqGKWCd-.js";import{B as t}from"./Button-BZgO5jCY.js";import{A as f}from"./ActionGroup-XBaLTsJ-.js";import{O as T}from"./OverlayTrigger-XTAv7ShH.js";import{D as C}from"./DialogTriggerView-DAy4vKnw.js";import{f as G,P as D,N,R as O}from"./flowComponent-DnG4Zld_.js";import{O as _}from"./Overlay-CAYmhgU8.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as b,b as F}from"./IconChevronDown-DOkopHOS.js";import{I as W}from"./IconClose-Cf99-dDQ.js";import{D as u}from"./DivView-BiqCn-DC.js";import{B as k}from"./ButtonView-D1__NE--.js";import{u as B}from"./useOverlayController-vqkxV1o1.js";import{I as p}from"./Image-BYlzcAr0.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-CpqQDvc3.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./Text-fsbk1lYn.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./utils-D141Jr51.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./remote-QKtGQrQi.js";import"./Button-CUB1U94R.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./dynamic-BXzH9RDF.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./useStatic-CPFMlQst.js";import"./OverlayContextProvider-Dy2hc-Zf.js";import"./context-C6xdvZ0U.js";import"./Dialog-CUnVff-C.js";import"./RSPContexts-SeDUPtJk.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useControlledState-CXUvh1Us.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./Div-B7h4VhHx.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=b("outline","trash","Trash",A),d=r=>o.jsx(F,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},i=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(W,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});i.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const rr={title:"Overlays/LightBox",component:i,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(i,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},s={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(i,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(i,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{s as Default,a as WithController,m as WithImageTrigger,c as WithoutFitScreen,tr as __namedExportsOrder,rr as default};
