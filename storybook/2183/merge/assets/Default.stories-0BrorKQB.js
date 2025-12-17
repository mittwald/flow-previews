import{j as o}from"./iframe-CzrbZwQa.js";import{B as t}from"./Button-BnubCMUU.js";import{A as f}from"./ActionGroup-BVCTu7ST.js";import{O as T}from"./OverlayTrigger-B315LgK0.js";import{D as C}from"./DialogTriggerView-B2HhjH7M.js";import{f as G,P as D,N,R as O}from"./flowComponent-8nLM6u8z.js";import{O as _}from"./Overlay-BRq1V5A0.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as F,a as W}from"./IconApp-BPXZ8R19.js";import{I as b}from"./IconClose-1Vi9D7Rd.js";import{D as u}from"./DivView-F_XlBHEE.js";import{B as k}from"./ButtonView-C20zsGI4.js";import{u as B}from"./useOverlayController-vG2MUPAG.js";import{I as p}from"./Image-DUFSXfnV.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-6ghHX6AO.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./Text-u_8Z_6lo.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./utils-Ds7wxNIq.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./remote-q4LXxmI0.js";import"./Button-Cr67WOIO.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./dynamic-BsERbuwe.js";import"./getActionGroupSlot-GuEuCuz_.js";import"./useStatic-CooBsGRu.js";import"./OverlayContextProvider-BRgyWi9O.js";import"./context-CO2P6JA_.js";import"./Dialog-2hzA1Zyr.js";import"./RSPContexts-BXOP7wdA.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";import"./Collection-DJOD4Ed7.js";import"./CollectionBuilder-D4t-xJzw.js";import"./SelectionIndicator-BDndb0Ze.js";import"./Separator-C-FZVUdq.js";import"./SelectionManager-N2u60-Z6.js";import"./useEvent-q-bdr1zW.js";import"./useCollator-TfVuzSHy.js";import"./FocusScope-Ct7XodZT.js";import"./VisuallyHidden-CUes-LKT.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=F("outline","trash","Trash",A),d=r=>o.jsx(W,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(b,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const or={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(s,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
