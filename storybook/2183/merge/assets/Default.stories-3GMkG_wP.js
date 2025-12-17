import{j as o}from"./iframe-BXRQqxRF.js";import{B as t}from"./Button-C0lHC6Ss.js";import{A as f}from"./ActionGroup-CBAIlTo2.js";import{O as T}from"./OverlayTrigger-BscE9StD.js";import{D as C}from"./DialogTriggerView-DsxOx_V5.js";import{f as G,P as D,N,R as O}from"./flowComponent-5zToaHXd.js";import{O as _}from"./Overlay-_q_W2zGu.js";import{c as P}from"./clsx-B-dksMZM.js";import{c as b,b as F}from"./IconChevronDown-CrvlnwL_.js";import{I as W}from"./IconClose-BUhhZBm5.js";import{D as u}from"./DivView-B_AbS5HP.js";import{B as k}from"./ButtonView-BdBt3zkg.js";import{u as B}from"./useOverlayController-dv6jX9Vt.js";import{I as p}from"./Image-il7hs4YV.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import{I as j}from"./IconDownload-C4l2iKmV.js";import"./preload-helper-PPVm8Dsz.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./Text-KdIVkcjD.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./utils-W_wb_I6t.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./remote-B9tgrHbM.js";import"./Button-DlzDIGUo.js";import"./ProgressBar-Bu0Rvbqr.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./dynamic-CLAkwN-B.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./useStatic-CDs84s8f.js";import"./OverlayContextProvider-yBtgBbFr.js";import"./context-BJK7zy3l.js";import"./Dialog-CBkTvNeJ.js";import"./RSPContexts-DBwrNRvT.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useControlledState-DF5Prxi4.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";const A=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],M=b("outline","trash","Trash",A),d=r=>o.jsx(F,{...r,children:o.jsx(M,{})});d.__docgenInfo={description:"",methods:[],displayName:"IconDelete"};const g=r=>{const{children:e,...h}=r;return o.jsx(T,{overlayType:"LightBox",...h,component:C,children:e})};g.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger"};const R="flow--light-box",V="flow--light-box--content",E="flow--light-box--fit-screen",q="flow--light-box--actions",z="flow--light-box--action-group",n={lightBox:R,content:V,fitScreen:E,actions:q,actionGroup:z},s=G("LightBox",r=>{const{controller:e,children:h,ref:H,className:y,fitScreen:I=!0,...L}=r,S=P(n.lightBox,I&&n.fitScreen,y),v={ActionGroup:{className:n.actionGroup,Button:{variant:"solid",color:"light"},tunnelId:"actionGroup"}},w=B("LightBox",{reuseControllerFromContext:!0}),x=e??w;return o.jsx(_,{overlayType:"LightBox",className:S,controller:x,...L,children:o.jsx(D,{props:v,children:o.jsxs(N,{children:[o.jsx(u,{className:n.content,children:h}),o.jsxs(u,{className:n.actions,children:[o.jsx(k,{color:"light",variant:"solid",onPress:x.close,children:o.jsx(W,{})}),o.jsx(O,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const or={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:r=>o.jsxs(g,{children:[o.jsx(t,{children:"Open LightBox"}),o.jsxs(s,{...r,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})},i={},c={args:{fitScreen:!1}},a={render:r=>{const e=B("LightBox");return o.jsxs(o.Fragment,{children:[o.jsx(t,{onPress:e.open,children:"Open LightBox"}),o.jsxs(s,{...r,controller:e,children:[o.jsx(p,{src:l.imageSrc}),o.jsxs(f,{children:[o.jsx(t,{children:o.jsx(j,{})}),o.jsx(t,{children:o.jsx(d,{})})]})]})]})}},m={render:()=>o.jsxs(g,{children:[o.jsx(t,{children:o.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:l.imageSrc})}),o.jsx(s,{children:o.jsx(p,{alt:"Gopher",src:l.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
