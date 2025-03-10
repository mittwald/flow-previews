import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as o}from"./Button-DhoxjOB0.js";import{A as v}from"./ActionGroup-BqtaK37Y.js";import"./IconApp-BlCDOz7i.js";import{l as _,j as w,C as O}from"./IconWarning-Cksp_dQT.js";import{O as $}from"./OverlayContent-dzOj_DcB.js";import{f as E,P as R,A as k,S as q}from"./flowComponent-BYduNA4_.js";import{u as b,O as z}from"./MenuTrigger-CHUqx2dT.js";import{c as H}from"./clsx-B-dksMZM.js";import{b as J}from"./Dialog-BV8uMRwe.js";import{I as p}from"./Image-CoINy84f.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./index-IBhSrjl6.js";import"./LoadingSpinner-BNlvu0xK.js";import"./Text-D9M1FVhy.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CjUGCB-i.js";import"./useStatic-79kqjvSG.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./context-T6wCf2v9.js";import"./RSPContexts-BEYwq1Zw.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";const K="flow--light-box",M="flow--light-box--content",Q="flow--light-box--fit-screen",U="flow--light-box--actions",V="flow--light-box--action-group",n={lightBox:K,content:M,fitScreen:Q,actions:U,actionGroup:V},s=E("LightBox",t=>{const{controller:e,children:g,ref:X,className:N,fitScreen:P=!0,...A}=t,D=H(n.lightBox,P&&n.fitScreen,N),F={ActionGroup:{className:n.actionGroup,Button:{variant:"soft",color:"light"},tunnelId:"actionGroup"}},W=b("LightBox",{reuseControllerFromContext:!0}),i=e??W;return r.jsx($,{overlayType:"LightBox",className:D,controller:i,...A,children:r.jsx(R,{props:F,children:r.jsxs(k,{children:[r.jsx("div",{className:n.content,children:g}),r.jsxs("div",{className:n.actions,children:[r.jsx(o,{color:"light",variant:"soft",onPress:i==null?void 0:i.close,children:r.jsx(_,{})}),r.jsx(q,{id:"actionGroup"})]})]})})})});s.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"LightBox"};const d=t=>{const{children:e,...g}=t;return r.jsx(z,{overlayType:"LightBox",...g,component:J,children:e})};d.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"LightBoxTrigger"};const Qr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:t=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...t,children:[r.jsx(p,{src:x.imageSrc}),r.jsxs(v,{children:[r.jsx(o,{children:r.jsx(w,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},c={},a={args:{fitScreen:!1}},m={render:t=>{const e=b("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:e.open,children:"Open LightBox"}),r.jsxs(s,{...t,controller:e,children:[r.jsx(p,{src:x.imageSrc}),r.jsxs(v,{children:[r.jsx(o,{children:r.jsx(w,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},l={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:x.imageSrc})}),r.jsx(s,{children:r.jsx(p,{alt:"Gopher",src:x.imageSrc})})]})};var h,u,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var B,j,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,G,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(T=(G=l.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const Ur=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{c as Default,m as WithController,l as WithImageTrigger,a as WithoutFitScreen,Ur as __namedExportsOrder,Qr as default};
