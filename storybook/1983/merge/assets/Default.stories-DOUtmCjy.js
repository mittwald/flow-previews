import{j as r}from"./iframe-Ci7am5-x.js";import{B as o}from"./Button-BxQcAiXL.js";import{A as T}from"./ActionGroup-IW_jjQv0.js";import{L as s,a as y}from"./LightBox-BEKMMAOR.js";import{I as m}from"./Image-BsTdNQTa.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CzB8zWov.js";import{u as w}from"./DialogTriggerView-DeMR5m7g.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQR7cNuW.js";import"./mergeRefs-BZZ4k-un.js";import"./index-BSkYpBON.js";import"./Text-QWIhyI-d.js";import"./browser-1MQn7X-d.js";import"./EmulatedBoldText-Cc0xL4Af.js";import"./Text-CnPMclzL.js";import"./utils-D8LfxOEa.js";import"./LoadingSpinner-t4rMaxgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BI8Ehzs7.js";import"./context-CzmRZySI.js";import"./Button-ByeNiRqN.js";import"./ProgressBar-D-kh5LUH.js";import"./Label-j8HR0Ono.js";import"./Hidden-6Fb8M7jx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TZmyIU6H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C06syjH3.js";import"./useFocus-ayIEkHl9.js";import"./useFocusRing-D6Pp4FJL.js";import"./useFocusable-ChczIcK6.js";import"./dynamic-BJQQnM_P.js";import"./getActionGroupSlot-q-TSSyCY.js";import"./useStatic-B16OfDVI.js";import"./Overlay-DojsgPmE.js";import"./ClearPropsContextView-QzLGn3tG.js";import"./useControlledState-D4tytcWm.js";import"./ButtonView-Dr_jyKyE.js";import"./context-Bg2fb23R.js";import"./RSPContexts-DC069Ofk.js";import"./FocusScope-2jIUVF7d.js";import"./useCollator-CP32wxPf.js";import"./VisuallyHidden-Bwug4jVH.js";import"./Collection-DbXsSG3M.js";import"./CollectionBuilder-CfQBwOi0.js";import"./Separator-DH-Qy1Ob.js";import"./Group-Blfbn2Yc.js";import"./SearchField-DgvC1Z9-.js";import"./FieldError-DZKw4mWV.js";import"./Form-BeUBWT2I.js";import"./useTextField-BBAHXs5i.js";import"./useFormReset-g9Y9sN6W.js";import"./TextField-VePiy-Wr.js";import"./useEvent-Cyd1cJwZ.js";import"./SelectionManager-DuM_3MOM.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
