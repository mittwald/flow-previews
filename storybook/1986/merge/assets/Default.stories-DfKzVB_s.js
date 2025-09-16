import{j as r}from"./iframe-d9P-aV0W.js";import{B as o}from"./Button-B1lQe4CG.js";import{A as T}from"./ActionGroup-syZ4aIld.js";import{L as s,a as y}from"./LightBox-BX7ZT86l.js";import{I as m}from"./Image-BLj5vaUH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BjZlRYlZ.js";import{u as w}from"./DialogTriggerView-FP1ivMgD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./Text-Be7zee3C.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./Text-D1KGOeak.js";import"./utils-D3Cd9kCb.js";import"./LoadingSpinner-BMYPjKuf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./context-3d2O_dpD.js";import"./Button-DwY3a-D1.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJC774kJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdPHlHdZ.js";import"./useFocus-Db-Axcue.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CwmqcSpm.js";import"./useStatic-BCruP98g.js";import"./Overlay-FgPMXWVy.js";import"./Dialog-e74qD_EA.js";import"./RSPContexts-CIfamJXM.js";import"./OverlayArrow-Cjv7HVcg.js";import"./useControlledState-CiRgye4r.js";import"./Collection-CdCCPlVo.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Separator-p90sXtPP.js";import"./Group-DNqxyc_c.js";import"./SearchField-CGJ3SG_G.js";import"./FieldError-DZyu-lh_.js";import"./Form-D0Rr0MG7.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./TextField-CBm_F67z.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./useCollator-D1fE0zhK.js";import"./FocusScope-Bqouiiv6.js";import"./VisuallyHidden-D6ugaIjO.js";import"./ButtonView-CZuAcorV.js";import"./context-DNdMdfyQ.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
