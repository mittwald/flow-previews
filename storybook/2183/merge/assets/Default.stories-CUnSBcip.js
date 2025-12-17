import{j as o}from"./iframe-XAYsosb6.js";import{B as t}from"./Button-BxhqNEtZ.js";import{A as f}from"./ActionGroup-cuM3yDJU.js";import{O as T}from"./OverlayTrigger-BrT7YDVm.js";import{D as C}from"./DialogTriggerView-C2mAqmKH.js";import{f as G,P as D,N,R as O}from"./flowComponent-BgSAAcwE.js";import{O as _}from"./Overlay-B-heGDmK.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as b,b as F}from"./IconChevronDown-CLHuWDBx.js";import{I as W}from"./IconClose-ty3WbZmM.js";import{D as u}from"./DivView-Cn8nXNtS.js";import{B as k}from"./ButtonView-DVn2z0BY.js";import{u as B}from"./useOverlayController-DOKPWS37.js";import{I as p}from"./Image-Ooqh1wDN.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-Dft1JGo-.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-BuTdVgor.js";import"./IconCheck-CATZaWGa.js";import"./Text-D0dxXYDJ.js";import"./browser-CF4AtnhZ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./utils-mpNKu3Qr.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./LoadingSpinner-BRBaERdC.js";import"./ariaLive-Z7x17Sr2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./remote-DUrH5qha.js";import"./Button-Bqhr8ozs.js";import"./ProgressBar-BRENX_vG.js";import"./Label-jhCIdmWo.js";import"./Hidden-BXwhawaS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-vx5-dYQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqzrclQw.js";import"./useFocus-6tpgkBNV.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocusable-NtGVjwhY.js";import"./dynamic-CAhkKb1T.js";import"./getActionGroupSlot-DqFoxLUz.js";import"./useStatic-CmdDHpQe.js";import"./OverlayContextProvider-DPuuuV3g.js";import"./context-CKFjVc7D.js";import"./Dialog-B6Y78fzh.js";import"./RSPContexts-DZiMI1g6.js";import"./OverlayArrow-TFGGeUC5.js";import"./useControlledState-DFlLGPV3.js";import"./Collection-DT0XSz1p.js";import"./CollectionBuilder-7sWRFWqn.js";import"./SelectionIndicator-CzOKaojY.js";import"./Separator-CYgNn2Xy.js";import"./SelectionManager-moo-j50V.js";import"./useEvent-BPTus2_l.js";import"./useCollator-Bwevici6.js";import"./FocusScope-utk7FKt0.js";import"./VisuallyHidden-BgleADuq.js";import"./Div-Boz0yzKN.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=b("outline","trash","Trash",A),d=r=>o.jsx(F,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},i=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(W,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});i.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const rr={title:"Overlays/LightBox",component:i,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(i,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},s={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(i,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(i,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
