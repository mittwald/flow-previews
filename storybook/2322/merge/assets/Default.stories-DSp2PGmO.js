import{j as r}from"./iframe-jPI25t47.js";import{B as o}from"./Button-CMdL10Ys.js";import{A as l}from"./ActionGroup-19L6oHyS.js";import{L as s,a as d}from"./LightBox-BBOnIm3L.js";import{I as m}from"./Image-DsIMfJjl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-D8uDJDej.js";import"./flowComponent-NWkTmrxz.js";import{u as h}from"./useOverlayController-Cy5LcSUF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./utils-DssEHlsW.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./LoadingSpinner-DhHtGG23.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./remote-B_as-6Bm.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./dynamic-DcvTJJQa.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./useStatic-Be080qZz.js";import"./OverlayTrigger-DoiiNK8E.js";import"./Dialog-C4XHiXzR.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./DialogTriggerView-DT88Z-vz.js";import"./Overlay-BMoI33va.js";import"./DivView-qj528P0e.js";import"./ButtonView-quZyuTrS.js";const jr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...n.parameters?.docs?.source}}};const fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,fr as __namedExportsOrder,jr as default};
