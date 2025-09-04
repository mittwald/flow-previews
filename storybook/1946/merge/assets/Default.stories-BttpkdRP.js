import{j as r}from"./iframe-CmZc2bqi.js";import{B as o}from"./Button-VEnTPgt_.js";import{A as T}from"./ActionGroup-BdAU1wMW.js";import{L as s,a as y}from"./LightBox-eQ-WFlN1.js";import{I as m}from"./Image-vC8HSiy8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-B3Gp2u9T.js";import{u as w}from"./DialogTriggerView-Devfp8nk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dzg9xpLh.js";import"./mergeRefs-rrkuZ5lZ.js";import"./index-EhdKi2rO.js";import"./Text-COKPMQN9.js";import"./browser-Cqy7wjuz.js";import"./EmulatedBoldText-B0pwgNBL.js";import"./Text-Bx1XUj_S.js";import"./utils-fQLXfhJQ.js";import"./LoadingSpinner-CdGxMhIP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DzGub7xE.js";import"./context-Cw7k38tl.js";import"./Button-CwlwACKZ.js";import"./ProgressBar-CSln1win.js";import"./Label-CpNDP5E5.js";import"./Hidden-BSO18HGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtvvIYui.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DHN_pdfM.js";import"./useFocus-DY4K5Od-.js";import"./useFocusRing-sPcGsq2F.js";import"./useFocusable-D9qZqDJ-.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D29IUdc4.js";import"./useStatic-UpaM-E4a.js";import"./Overlay-Bb9qfQNZ.js";import"./Dialog-C8j6vy7m.js";import"./RSPContexts-BZzxK-gf.js";import"./OverlayArrow-DglMoI2B.js";import"./useControlledState-CRvbu7Hz.js";import"./Collection-DjdIGVi0.js";import"./CollectionBuilder-CnF6WRcM.js";import"./Separator-7rE_vwQ_.js";import"./Group-BrnlYKy2.js";import"./SearchField-CHmOEpRX.js";import"./FieldError-CDojZsJo.js";import"./Form-DSe96I0y.js";import"./useTextField-yJLMliYt.js";import"./useFormReset-sUUVL5Mg.js";import"./TextField-B6Lvx4B_.js";import"./useEvent-Bt3Pdp32.js";import"./SelectionManager-Bx2-6Dwl.js";import"./useCollator-auH5hY6V.js";import"./FocusScope-CVBsChQR.js";import"./VisuallyHidden-BIaD2K_8.js";import"./ButtonView-BuzvrWl8.js";import"./context-BhzXq7hi.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
