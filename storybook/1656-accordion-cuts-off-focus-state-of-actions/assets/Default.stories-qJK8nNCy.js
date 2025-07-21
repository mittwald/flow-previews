import{j as r}from"./iframe-tng_7MnI.js";import{B as o}from"./Button-DU_QW8Rd.js";import{A as T}from"./ActionGroup-DTyTHkNS.js";import{L as m,a as y}from"./LightBox-DE3Oz--d.js";import{I as s}from"./Image-DlZJdQWy.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BPmu7WCe.js";import{u as w}from"./DialogTriggerView-CRs3bhJy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./Text-D_jDO6uI.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";import"./Text-CW9rRGi5.js";import"./utils-5hQd1GPy.js";import"./LoadingSpinner-DVPPG5kf.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./context-DF7MMgfI.js";import"./Button-BAFArKRX.js";import"./ProgressBar-BKGN512w.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Xo2bW3MF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-GMQejvE6.js";import"./useFocus-DB2yX2jm.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocusable-DouN-Cym.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-jEh-tcyT.js";import"./useStatic-Vj9I4teO.js";import"./Overlay-lwTe_IPj.js";import"./Dialog-IOGvswXh.js";import"./RSPContexts-B53Ismbm.js";import"./OverlayArrow-D1J4V4Xu.js";import"./useControlledState-BUDKzFUA.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./Input-X3v1cPFB.js";import"./SearchField-BOUVMF0K.js";import"./FieldError-DYaGdwvi.js";import"./Form-DwsjCjtf.js";import"./Group-7jupwvb6.js";import"./useTextField--Fxttb5L.js";import"./useFormReset-xJzqPhqW.js";import"./TextField-iYZH2OXM.js";import"./SelectionManager-Ci6gTmLN.js";import"./useEvent-CP-X5b9K.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./DivView-C70C0B-F.js";import"./ButtonView-DTF6wNSF.js";import"./context-t97AZKNB.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
