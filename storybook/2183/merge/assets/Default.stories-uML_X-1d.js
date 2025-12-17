import{j as o}from"./iframe-CuoLN6Ak.js";import{B as t}from"./Button-Cfn_KBZi.js";import{A as f}from"./ActionGroup-BQouqhs8.js";import{O as T}from"./OverlayTrigger-BBfxPtJK.js";import{D as C}from"./DialogTriggerView-D7tF97D7.js";import{f as G,P as D,N,R as O}from"./flowComponent-YDIBuGER.js";import{O as _}from"./Overlay-CSgsW31Z.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as F,a as W}from"./IconApp-BDJ8KTSO.js";import{I as b}from"./IconClose-aECPyTHD.js";import{D as u}from"./DivView-BJ3zd8oU.js";import{B as k}from"./ButtonView-I6KzuyV6.js";import{u as B}from"./useOverlayController-BQNvHxuF.js";import{I as p}from"./Image-xseo-uF2.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-CFWlRI6a.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./Text-DdChUKUI.js";import"./browser-t1e5k5Lt.js";import"./EmulatedBoldText-BNHG0Gfg.js";import"./Text-C8IviCt6.js";import"./utils-C2NHa3pd.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./context-DM2sT4iG.js";import"./remote-JKpMdsKf.js";import"./Button-D6bHbdkl.js";import"./ProgressBar-DQXQN5uc.js";import"./Label-D3KIvHQC.js";import"./Hidden-DgR9vk0-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./dynamic-8E81vrw4.js";import"./getActionGroupSlot-w80GylpO.js";import"./useStatic-DF3kEdZS.js";import"./OverlayContextProvider-DODbX18A.js";import"./context-Cxg_dyF2.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./OverlayArrow-C99iKRaY.js";import"./useControlledState-ItXXMvHS.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useEvent-CGtQDWm6.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=F("outline","trash","Trash",A),d=r=>o.jsx(W,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(b,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const or={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(s,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
