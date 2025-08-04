import{j as r}from"./iframe-CPZzz606.js";import{B as o}from"./Button-pCBSultP.js";import{A as T}from"./ActionGroup-CmEloUhX.js";import{L as s,a as y}from"./LightBox-DL7UrKvV.js";import{I as m}from"./Image-BtoFC0XR.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BPgxt_jx.js";import{u as w}from"./DialogTriggerView-CzpBmyqI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./Text-DzdHITqg.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";import"./Text-BoUJhWX_.js";import"./utils-hIOiRbRa.js";import"./LoadingSpinner-BcRThk1E.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./context-CViJrtm-.js";import"./Button-Duf2neHD.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-z4mqv1Jd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./useFocus-C_gNEsKA.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DKujiI-6.js";import"./useStatic-Dc3QDw1T.js";import"./Overlay-XrNtLuso.js";import"./Dialog-DwMRnG84.js";import"./RSPContexts-CvcQ69I6.js";import"./OverlayArrow-BDHME5Dc.js";import"./useControlledState-9qfYMj22.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./Group-C8G6Zc28.js";import"./SearchField-AT0aPHjw.js";import"./FieldError-zYKEm-70.js";import"./Form-BILDQ_LX.js";import"./useTextField-BMmwbaof.js";import"./useFormReset-C84L7XAZ.js";import"./TextField-DmRYj9dm.js";import"./useEvent-7mKEowYR.js";import"./SelectionManager-aTZIig9u.js";import"./useCollator-B1cTbBXX.js";import"./FocusScope-jLRXpVZJ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./DivView-bL6pcSyL.js";import"./ButtonView-DVhxb8HY.js";import"./context-AQX-vkQB.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
