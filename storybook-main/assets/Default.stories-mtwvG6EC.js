import{j as r}from"./iframe-Coh3lrZj.js";import{B as o}from"./Button-D5EdJ83A.js";import{A as T}from"./ActionGroup-CrLJ68kJ.js";import{L as s,a as y}from"./LightBox-BbMQI4KU.js";import{I as m}from"./Image-MqeP2ujQ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-B1v1dgwn.js";import{u as w}from"./DialogTriggerView-CMJvOO3i.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./Text-CXTmOKkL.js";import"./browser-8tAA8o9s.js";import"./EmulatedBoldText-CrQvx5NB.js";import"./Text-C-iBrm51.js";import"./utils-CN3w8kPq.js";import"./LoadingSpinner-CX_uswsf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./context-BpLwYJWu.js";import"./Button-cLSaMy5d.js";import"./ProgressBar-CHLkYv72.js";import"./Label-YsAq_uoV.js";import"./Hidden-DOaFp58p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BKRPYz_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BU16hmOe.js";import"./useFocus-DOmsUoiU.js";import"./useFocusRing-Bz5xuAjx.js";import"./useFocusable-D2foM-gB.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BtRAHx2-.js";import"./useStatic-BT-23i_z.js";import"./Overlay-C8RWczN3.js";import"./Dialog-DCw7F88C.js";import"./RSPContexts-C359HXMi.js";import"./OverlayArrow-qlVhoYin.js";import"./useControlledState-C1ksr8rK.js";import"./Collection-cAnrSkK1.js";import"./CollectionBuilder-CwtIJ2gd.js";import"./Separator-CwGjgvWm.js";import"./Group-O8MFP4r0.js";import"./SearchField-BwCTywRo.js";import"./FieldError-CZajLekn.js";import"./Form-C7dJ7ChK.js";import"./useTextField-DgBLYHiF.js";import"./useFormReset-0zxdLi8h.js";import"./TextField-DmB3C__1.js";import"./useEvent-D6JeCAIh.js";import"./SelectionManager-DNWvZwOK.js";import"./useCollator-DMqrDDl2.js";import"./FocusScope-Cb054v9_.js";import"./VisuallyHidden-BFztPoj4.js";import"./ButtonView-Ct-JU0xw.js";import"./context-B447f_pA.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
