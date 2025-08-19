import{j as r}from"./iframe-Bgax2JY0.js";import{B as o}from"./Button-DorhvjcK.js";import{A as T}from"./ActionGroup-9NgnkgRF.js";import{L as s,a as y}from"./LightBox-CKwSiM-S.js";import{I as m}from"./Image-BhFqgQwP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-CIEL4Pty.js";import{u as w}from"./DialogTriggerView-oUhD9ZXx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CmOrLwYQ.js";import"./mergeRefs-1LV-M9lp.js";import"./index-B-5I2LyG.js";import"./Text-D6HIqkzL.js";import"./browser-CNVsKzoy.js";import"./EmulatedBoldText-CcxcoryL.js";import"./Text-BnSb9DeM.js";import"./utils-DhvHJ7nc.js";import"./LoadingSpinner-Bv666wXE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-uMxvRbqB.js";import"./context-Bb8mc0Vr.js";import"./Button-DgAfNMgE.js";import"./ProgressBar-CZQ_VFpR.js";import"./Label-qLOfPpHT.js";import"./Hidden-DMxEzFkJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-tzcBKB-Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g-wt-ENC.js";import"./useFocus-Bodxhf8B.js";import"./useFocusRing-DcvKFQyA.js";import"./useFocusable-Bp4ESZkx.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-dcXhdsbk.js";import"./useStatic-DXnsBsC9.js";import"./Overlay-2yRhPbpg.js";import"./Dialog-BurARqGL.js";import"./RSPContexts-P0zhp91u.js";import"./OverlayArrow-CYHIASrt.js";import"./useControlledState-ac1T2b60.js";import"./Collection-Dtx_2tJr.js";import"./CollectionBuilder-D9WqczC4.js";import"./Separator-DIslfa6e.js";import"./Group-YM833BDX.js";import"./SearchField-kAL_jkdT.js";import"./FieldError-DcSiOcsV.js";import"./Form-CqpGTvbl.js";import"./useTextField-B7zXE9Jf.js";import"./useFormReset-CYQ4wC1P.js";import"./TextField-CBK-xjEz.js";import"./useEvent-BaDyCPVa.js";import"./SelectionManager-CESmDrfy.js";import"./useCollator-DvCxePvq.js";import"./FocusScope-BkaPqd68.js";import"./VisuallyHidden-Dl-5RC8j.js";import"./ButtonView-CpGb_C9q.js";import"./context-CPunWrMu.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
