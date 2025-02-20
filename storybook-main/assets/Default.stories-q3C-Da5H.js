import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as o}from"./Button-Bwq2LB8B.js";import{A as w}from"./ActionGroup-CE92BbTj.js";import{f as _,P as $,A as E,S as R}from"./flowComponent-B-ghCXY_.js";import{O as k}from"./OverlayContent-Dq9uRWSG.js";import{c as z}from"./clsx-B-dksMZM.js";import{u as C,O as q}from"./MenuTrigger-D8kIIXy_.js";import"./IconApp-vAs-LrT2.js";import{m as H,i as O,z as b}from"./IconWarning-DIwIHW1V.js";import{b as J}from"./Dialog-BV8uMRwe.js";import{I as p}from"./Image-9ukQCHXG.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Wrap-DQq6jo70.js";import"./Text-CuR7qYwD.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./index-IBhSrjl6.js";import"./LoadingSpinner-D9XbF_eS.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./useStatic-CJjI45yZ.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./context-CYJytrr2.js";import"./RSPContexts-BEYwq1Zw.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";const K="flow--light-box",M="flow--light-box--content",Q="flow--light-box--fit-screen",U="flow--light-box--actions",V="flow--light-box--action-group",n={lightBox:K,content:M,fitScreen:Q,actions:U,actionGroup:V},s=_("LightBox",t=>{const{controller:e,children:g,ref:X,className:N,fitScreen:P=!0,...A}=t,D=z(n.lightBox,P&&n.fitScreen,N),F={ActionGroup:{className:n.actionGroup,Button:{variant:"soft",color:"light"},tunnelId:"actionGroup",ignoreBreakpoint:!0}},W=C("LightBox",{reuseControllerFromContext:!0}),i=e??W;return r.jsx(k,{overlayType:"LightBox",className:D,controller:i,...A,children:r.jsx($,{props:F,children:r.jsxs(E,{children:[r.jsx("div",{className:n.content,children:g}),r.jsxs("div",{className:n.actions,children:[r.jsx(o,{color:"light",variant:"soft",onPress:i==null?void 0:i.close,children:r.jsx(H,{})}),r.jsx(R,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:`@flr-generate all
@flr-clear-props-context`,methods:[],displayName:"LightBox"};const d=t=>{const{children:e,...g}=t;return r.jsx(q,{overlayType:"LightBox",...g,component:J,children:e})};d.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"LightBoxTrigger"};const Ur={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:t=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...t,children:[r.jsx(p,{src:x.imageSrc}),r.jsxs(w,{children:[r.jsx(o,{children:r.jsx(O,{})}),r.jsx(o,{children:r.jsx(b,{})})]})]})]})},c={},a={args:{fitScreen:!1}},m={render:t=>{const e=C("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:e.open,children:"Open LightBox"}),r.jsxs(s,{...t,controller:e,children:[r.jsx(p,{src:x.imageSrc}),r.jsxs(w,{children:[r.jsx(o,{children:r.jsx(O,{})}),r.jsx(o,{children:r.jsx(b,{})})]})]})]})}},l={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:x.imageSrc})}),r.jsx(s,{children:r.jsx(p,{alt:"Gopher",src:x.imageSrc})})]})};var h,u,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var B,j,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,y,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var G,T,v;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const Vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{c as Default,m as WithController,l as WithImageTrigger,a as WithoutFitScreen,Vr as __namedExportsOrder,Ur as default};
