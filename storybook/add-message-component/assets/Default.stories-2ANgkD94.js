import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-z_q_KHNa.js";import{A as y}from"./ActionGroup-IEHQ7c31.js";import{f as D,P as F,O as _}from"./flowComponent-CbUmZLC8.js";import{O as q}from"./Overlay-B8CLxq1Z.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as L,O as R,$ as W}from"./OverlayTrigger-z2LviGdZ.js";import{P as $}from"./PropsContextProvider-CRusYdr1.js";import"./IconApp-CASOqNDc.js";import{o as k,i as O,y as S}from"./IconWarning-DwqDUFht.js";import{I as v}from"./Image-DdAdRJuC.js";import{d as C}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Wrap-DQq6jo70.js";import"./Text-BIl4TEP_.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";import"./utils-Cd8r7pc9.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./LoadingSpinner-Bz_DBkUU.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-DKDQv6qd.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CKybZYMg.js";import"./useFocusRing-CqFdZJbR.js";import"./usePress-Dcn7RY69.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CN29HkWI.js";import"./useSelector-BkJAchTy.js";import"./OverlayArrow-BrbzJDKz.js";import"./useControlledState-B7K2eYzO.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-DKO1s6Kq.js";const j="flow--light-box",z="flow--light-box--content",H="flow--light-box--fit-screen",J="flow--light-box--actions",K="flow--light-box--action-group",n={lightBox:j,content:z,fitScreen:H,actions:J,actionGroup:K},s=D("LightBox",t=>{const{controller:o,children:m,refProp:M,className:T,fitScreen:w=!0,...P}=t,G=A(n.lightBox,w&&n.fitScreen,T),N={ActionGroup:{className:n.actionGroup,Button:{variant:"soft",color:"light"},tunnelId:"actionGroup",ignoreBreakpoint:!0}},b=L("LightBox",{reuseControllerFromContext:!0}),l=o??b;return e.createElement(q,{overlayType:"LightBox",className:G,controller:l,...P},e.createElement($,{props:N},e.createElement(F,null,e.createElement("div",{className:n.content},m),e.createElement("div",{className:n.actions},e.createElement(r,{color:"light",variant:"soft",onPress:l==null?void 0:l.close},e.createElement(k,null)),e.createElement(_,{id:"actionGroup"})))))});s.__docgenInfo={description:"",methods:[],displayName:"LightBox"};const I=t=>{const{children:o,...m}=t;return e.createElement(R,{overlayType:"LightBox",...m,component:W},o)};I.__docgenInfo={description:"",methods:[],displayName:"LightBoxTrigger",props:{tunnelId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"@internal"},wrapWith:{required:!1,tsType:{name:"ReactElement"},description:""},isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},controller:{required:!1,tsType:{name:"OverlayController"},description:""}}};const Ae={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:t=>e.createElement(I,null,e.createElement(r,null,"Open LightBox"),e.createElement(s,{...t},e.createElement(v,{src:C.imageSrc}),e.createElement(y,null,e.createElement(r,null,e.createElement(O,null)),e.createElement(r,null,e.createElement(S,null)))))},i={},a={args:{fitScreen:!1}},c={render:t=>{const o=L("LightBox");return e.createElement(e.Fragment,null,e.createElement(r,{onPress:o.open},"Open LightBox"),e.createElement(s,{...t,controller:o},e.createElement(v,{src:C.imageSrc}),e.createElement(y,null,e.createElement(r,null,e.createElement(O,null)),e.createElement(r,null,e.createElement(S,null)))))}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,B,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const Re=["Default","WithoutFitScreen","WithController"];export{i as Default,c as WithController,a as WithoutFitScreen,Re as __namedExportsOrder,Ae as default};