import{j as r}from"./iframe-D2buA_qM.js";import{B as o}from"./Button-zVUpRv9Z.js";import{A as T}from"./ActionGroup-BnTjuqT1.js";import{L as s,a as y}from"./LightBox-CoIb7mh2.js";import{I as m}from"./Image-BLgokCF3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-IOoTZAJG.js";import{u as w}from"./DialogTriggerView-DB_1VJf1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./Text-yAGEZlE0.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Text-BCY1tMCR.js";import"./utils-C_LZ7m3D.js";import"./LoadingSpinner-ja7u21Ua.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CoFh3sW6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocus-1B3Rl8Uo.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./useStatic-DUlV9yhw.js";import"./Overlay-R7d9BbF8.js";import"./Dialog-DvjD4YKx.js";import"./RSPContexts-BGMIawCG.js";import"./OverlayArrow-Cjyx3coH.js";import"./useControlledState-DPiym9a8.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./Group-BFErIHGB.js";import"./SearchField-Zb9DN-44.js";import"./FieldError-B8sT_j_d.js";import"./Form-BNf6kdxI.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./TextField-BPJkVYT-.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./useCollator-ThJgZh_Z.js";import"./FocusScope-D_7nktvV.js";import"./VisuallyHidden-CgNpbGUk.js";import"./DivView-bFulbIMt.js";import"./ButtonView-BDU-7zRb.js";import"./context-BfKgyIPw.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
