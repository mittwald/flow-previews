import{j as r}from"./iframe-H6s4LegX.js";import{B as o}from"./Button-BfyS9OW4.js";import{A as T}from"./ActionGroup-DfL0iMVB.js";import{L as s,a as y}from"./LightBox-DabMOFQJ.js";import{I as m}from"./Image-BRuFC_NX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BOAgarfH.js";import{u as w}from"./DialogTriggerView-D6-ZN5ak.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./Text-Wzcs2ORX.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";import"./Text-W_tYTgvJ.js";import"./utils-UMD8tMdI.js";import"./LoadingSpinner-BtBwTXqe.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./context-ByOQKEDv.js";import"./Button-D43Lcc_s.js";import"./ProgressBar-D5gyotl2.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BPkUN2gP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B_R4nnaN.js";import"./useFocus-CgMx6KCt.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CgS0DVys.js";import"./useStatic-DkayqYPl.js";import"./Overlay-UkvfdomO.js";import"./Dialog-CNl9Rue_.js";import"./RSPContexts-B4jRuJIy.js";import"./OverlayArrow-CJ9pmdXw.js";import"./useControlledState-CVjmrtmN.js";import"./Collection-C7wh_wcR.js";import"./CollectionBuilder-D60ucnzT.js";import"./Separator-BxffjzOt.js";import"./Group-Cl4o1nBF.js";import"./SearchField-DznnLjI8.js";import"./FieldError-Dt9y-hnT.js";import"./Form-DQJn-VxA.js";import"./useTextField-D6v9RXcK.js";import"./useFormReset-iDdXzUQ2.js";import"./TextField-2cDCflSd.js";import"./useEvent-B4EMUzkK.js";import"./SelectionManager-CXLxGtrQ.js";import"./useCollator-5lRk6LtQ.js";import"./FocusScope-BRfTPPDJ.js";import"./VisuallyHidden-BsO4eIaj.js";import"./DivView-DyGVkr8B.js";import"./ButtonView-C42CIbnH.js";import"./context-ByVpJXr1.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
