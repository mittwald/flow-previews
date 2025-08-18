import{j as r}from"./iframe-dcfCh18n.js";import{B as o}from"./Button-Da273mbx.js";import{A as T}from"./ActionGroup-Cm-hgm7e.js";import{L as s,a as y}from"./LightBox-uo4L5GHb.js";import{I as m}from"./Image-Dw-CU6eP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BWA_nqvd.js";import{u as w}from"./DialogTriggerView-BB_RmeFU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./Text-D7p3kvP7.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";import"./Text-38QS6QcB.js";import"./utils-CaaN6tMi.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./context-BfLqp0TH.js";import"./Button-D8qJizcb.js";import"./ProgressBar-BcZD8tRU.js";import"./Label-DBNmmXrt.js";import"./Hidden-CnGKQwOV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CpnVZyQW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BgO5jEhv.js";import"./useFocus-DiEh5oG5.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocusable-Cdnk8Kqp.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DfUfHthN.js";import"./useStatic-Dqwqzi-C.js";import"./Overlay-LumP7zlI.js";import"./Dialog-DLMrif4z.js";import"./RSPContexts-W4MNUJhM.js";import"./OverlayArrow-NUC550dY.js";import"./useControlledState-CjmCqi1H.js";import"./Collection-DEoan4F0.js";import"./CollectionBuilder-WRzFhLbw.js";import"./Separator-DQZuDVMG.js";import"./Group-qqCya-sH.js";import"./SearchField-DOB9WtIS.js";import"./FieldError-jHHw5TXz.js";import"./Form-k5YG3sGC.js";import"./useTextField-BUPKcxtd.js";import"./useFormReset-DV-dKI4G.js";import"./TextField-DqWSAtzr.js";import"./useEvent-9GQqu5so.js";import"./SelectionManager-BtQR7swA.js";import"./useCollator-DK-_TAlj.js";import"./FocusScope-BOAHQoFR.js";import"./VisuallyHidden-7QHbeduJ.js";import"./ButtonView-C-WQbeT5.js";import"./context-TKpdQxdP.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var L,S,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
