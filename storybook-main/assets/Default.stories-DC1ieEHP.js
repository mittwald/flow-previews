import{j as r}from"./iframe-BB26x0WO.js";import{B as o}from"./Button-BTY4YrG_.js";import{A as l}from"./ActionGroup-B49LzYT3.js";import{L as s,a as d}from"./LightBox-DfXUMrkq.js";import{I as m}from"./Image-Du3loSXk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-xtBRgQwR.js";import{u as h}from"./useOverlayController-CrgCUZX_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./Text-CVJJy1PS.js";import"./browser-CM4yKXDn.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./utils-B0cjT-cu.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./remote-BOIRgCVv.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./dynamic-iWxR2zWf.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./useStatic-CBwNmb4h.js";import"./OverlayTrigger-CBbEoXQd.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./context-tsnqiuvV.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./DialogTriggerView-BVHd8_RR.js";import"./Overlay-OtXuapCS.js";import"./DivView-pb5hKIa_.js";import"./ButtonView-DHrXopea.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Lr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Lr as __namedExportsOrder,fr as default};
