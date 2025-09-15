import{j as r}from"./iframe-ezKPDceg.js";import{B as o}from"./Button-DbzZMeUS.js";import{A as T}from"./ActionGroup-C5zgwFls.js";import{L as s,a as y}from"./LightBox-DJYRd2rZ.js";import{I as m}from"./Image-Btr6DTvD.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-iHRHTv2O.js";import{u as w}from"./DialogTriggerView-B6gXU8vi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./Text-CUR3tOrp.js";import"./browser-BOjVaVGi.js";import"./EmulatedBoldText-BpljTSGS.js";import"./Text-BuR4UJfD.js";import"./utils-DzswpBsb.js";import"./LoadingSpinner-BRfDN20n.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./context-BrV7YpGK.js";import"./Button-DO9HCw5q.js";import"./ProgressBar-C6U_wRip.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CN4tRF6C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DYKNfU9_.js";import"./useFocus-DJ-TYVVM.js";import"./useFocusRing-gH5JHApn.js";import"./useFocusable-B-msIfGP.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BkTiqldw.js";import"./useStatic-CNaXVqhs.js";import"./Overlay-BPuLN2AX.js";import"./Dialog-CsG1YX16.js";import"./RSPContexts-D9JC3ke5.js";import"./OverlayArrow-Cg5cqTaC.js";import"./useControlledState-BblR5lPL.js";import"./Collection-ZxatR5QS.js";import"./CollectionBuilder-CeLFQwBB.js";import"./Separator-Dbz-9PCT.js";import"./Group-BDVVyk9o.js";import"./SearchField-CcD3FqPJ.js";import"./FieldError-D8wvACBx.js";import"./Form-CmBAUGhT.js";import"./useTextField-Dj17RY-h.js";import"./useFormReset-pmH2UUNu.js";import"./TextField-CfP2mJzy.js";import"./useEvent-RmC2LF0W.js";import"./SelectionManager-DbiWXVNm.js";import"./useCollator-CIKaMC9W.js";import"./FocusScope-eYFIheUb.js";import"./VisuallyHidden-CoNZ8DQ3.js";import"./ButtonView-B1vfxIN2.js";import"./context-dSZ45fFT.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
