import{j as r}from"./iframe-XU38G95a.js";import{B as o}from"./Button-BRSF3HU2.js";import{A as T}from"./ActionGroup-altzehyl.js";import{L as s,a as y}from"./LightBox-uDU39gmq.js";import{I as m}from"./Image-B1vJgybq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-C4sgFplx.js";import{u as w}from"./DialogTriggerView-C6cdj0HA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./Text-BiCu62_D.js";import"./browser-DzHUdCJ5.js";import"./EmulatedBoldText-DgdtlBmQ.js";import"./Text-BOldZPQm.js";import"./utils-CRMz2C-S.js";import"./LoadingSpinner-BHQyVil0.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./context-DoEtjPsM.js";import"./Button-DXKMbIig.js";import"./ProgressBar-B_1vEsN7.js";import"./Label-B-D8nJqg.js";import"./Hidden-CmYs0ax8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWzTJ_60.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmxXsmze.js";import"./useFocus-BcwSg9Gz.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocusable-bB4ldgF4.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CNBLHpLc.js";import"./useStatic-IEgx7F5P.js";import"./Overlay-CJxUs4vC.js";import"./Dialog-WotfotBD.js";import"./RSPContexts-Dggqaxhp.js";import"./OverlayArrow-DHjXAVGD.js";import"./useControlledState-D-ouz_Ia.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./Group-CaxTXUah.js";import"./SearchField-C9T5dJPC.js";import"./FieldError-iHvRLgo5.js";import"./Form-BwQPNTC6.js";import"./useTextField-DczSeHlH.js";import"./useFormReset-CGohrCOb.js";import"./TextField-OEkZHrb0.js";import"./useEvent-BbdxCe-3.js";import"./SelectionManager-C40pIXC_.js";import"./useCollator-C7gGvaqP.js";import"./FocusScope-ng_yE7d5.js";import"./VisuallyHidden-DU3qZR-S.js";import"./DivView-BXn-551w.js";import"./ButtonView-BlGKleuL.js";import"./context-C_3J_Isg.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
