import{j as r}from"./iframe-BuQIW6_u.js";import{B as o}from"./Button-DlXaalMD.js";import{A as T}from"./ActionGroup-CDBzwOeI.js";import{L as s,a as y}from"./LightBox-DYu-60Q1.js";import{I as m}from"./Image-BeRDOyXk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CTHW-5ya.js";import{u as w}from"./DialogTriggerView-5KTKvzk5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./Text-8TMWzlfF.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";import"./utils-C3-2IFIX.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./Button-BKD05Onb.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-V7qiuXiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKHC3-jq.js";import"./useFocus-CJRfh2Zc.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DeOL7iYR.js";import"./useStatic-Cs9s3jvC.js";import"./Overlay-BgxZeNvz.js";import"./Dialog-DEmHowc0.js";import"./RSPContexts-CueUa63T.js";import"./OverlayArrow-BFcQ4aC2.js";import"./useControlledState-DeMfvYEX.js";import"./Collection-BX_jXMRy.js";import"./CollectionBuilder-kPYqAuhc.js";import"./Separator-D2HmxWfn.js";import"./Group-C2-D-gHZ.js";import"./SearchField-BQcQWlfh.js";import"./FieldError-CwfU_VRl.js";import"./Form-QX_URUcu.js";import"./useTextField-ChNo9r-2.js";import"./useFormReset-Cq5VWng9.js";import"./TextField-B1BJmtCC.js";import"./useEvent-Cn4un1lG.js";import"./SelectionManager-pzK_YEl4.js";import"./useCollator-QIDMCYGr.js";import"./FocusScope-CbX1YQFz.js";import"./VisuallyHidden-Db59Lmwd.js";import"./ButtonView-COkyfpWf.js";import"./context-nH1y_ndl.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
