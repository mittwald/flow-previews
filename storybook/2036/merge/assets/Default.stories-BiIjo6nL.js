import{j as r}from"./iframe-skRbRPoL.js";import{B as o}from"./Button-Dz0DuBiT.js";import{A as T}from"./ActionGroup-DcKdxNCn.js";import{L as s,a as y}from"./LightBox-BkIE-pfO.js";import{I as m}from"./Image-D7EUQRSk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as G,a6 as O}from"./IconWarning-DXpZ8EkD.js";import{u as w}from"./DialogTriggerView-CvcPrbY8.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./Text-CrBUObvU.js";import"./browser-5dwj1raN.js";import"./EmulatedBoldText-bw_ADscr.js";import"./Text-CUtREENU.js";import"./utils-BGdTTFGe.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./dynamic-CBZdW0rY.js";import"./getActionGroupSlot-DYUIykqS.js";import"./useStatic-DAiG3iJH.js";import"./Overlay-B9uNa-Mg.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./ButtonView--y-Q9EVZ.js";import"./context-BgdpZ9Nh.js";import"./RSPContexts-x0Tynp33.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";const yr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Gr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Gr as __namedExportsOrder,yr as default};
