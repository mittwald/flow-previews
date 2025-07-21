import{j as r}from"./iframe-Bd70UBfQ.js";import{B as o}from"./Button-ABWfnhuf.js";import{A as T}from"./ActionGroup-keMuw0Mo.js";import{L as m,a as y}from"./LightBox-6i2brqmd.js";import{I as s}from"./Image-Dv-5nnM6.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Dx4sU-j9.js";import{u as w}from"./DialogTriggerView-DIXKjk2D.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./Text-DDmCr0c3.js";import"./browser-CDzL9dyN.js";import"./EmulatedBoldText-CROyqepx.js";import"./Text-DnJtq-Ca.js";import"./utils-BmyyYDYY.js";import"./LoadingSpinner-C9Uerl8R.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./context-C3LNBa76.js";import"./Button-BTLR1vS2.js";import"./ProgressBar-CU3IfAKj.js";import"./Label-g6yaf0Tw.js";import"./Hidden-CvIRFHlC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-w4mzRly1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Z-qLfgnH.js";import"./useFocus-_CMpkysi.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocusable-rNBIEL3L.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DRV4djV0.js";import"./useStatic-LzaGYsCx.js";import"./Overlay-C4FQgMdx.js";import"./Dialog-CX-LU2mB.js";import"./RSPContexts-ByMUw4AZ.js";import"./OverlayArrow-Cw8nIh42.js";import"./useControlledState-ChZkaxon.js";import"./Collection-S5kPVUME.js";import"./CollectionBuilder-DkUHX8v0.js";import"./Separator-DmvFwBU3.js";import"./Input-UumKyZ__.js";import"./SearchField-DmyF7w_w.js";import"./FieldError-BoxMIPJS.js";import"./Form-hLedV1Ku.js";import"./Group-DfP_y73Q.js";import"./useTextField-CAXEM3Cr.js";import"./useFormReset-D2aXstqB.js";import"./TextField-CLBMJ7hZ.js";import"./SelectionManager-CaueLSz8.js";import"./useEvent-EcQqHcfQ.js";import"./useCollator-DzDuPy2D.js";import"./FocusScope-Bx1kvcbQ.js";import"./VisuallyHidden-CEaQSbTN.js";import"./DivView-BhOL9Jjo.js";import"./ButtonView-Cw1wqJ1u.js";import"./context-CCwAOuxY.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
