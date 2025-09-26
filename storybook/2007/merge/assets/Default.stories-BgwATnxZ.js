import{j as r}from"./iframe-DkzCwCX4.js";import{B as o}from"./Button-BnlekXC3.js";import{A as T}from"./ActionGroup-C8VolYTb.js";import{L as s,a as y}from"./LightBox-CqEGtSUh.js";import{I as m}from"./Image-B9cW3fk7.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-DW3eva0Y.js";import{u as w}from"./DialogTriggerView-C0Uk_5SJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./Text-nAHNspGp.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Text-lQk_ytCv.js";import"./utils-CLIXtwVU.js";import"./LoadingSpinner-CQddXTjo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./context-R4HBJhIj.js";import"./Button-BmtE6ca-.js";import"./ProgressBar-BPpVJdpP.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo4yNuZG.js";import"./useFocus-ib9l0UKV.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./dynamic-BbyFekY5.js";import"./getActionGroupSlot-OrHKCra6.js";import"./useStatic-DPeMNtEl.js";import"./Overlay-CQ1ysFVh.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useControlledState-BOJEDAaV.js";import"./ButtonView-B9ZaI5OK.js";import"./context-C3VhVMcy.js";import"./RSPContexts-ypxcCxo7.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./Group-0pV7udqg.js";import"./SearchField-Cdw14afw.js";import"./FieldError-Jo1S5986.js";import"./Form-Bd46is8r.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./TextField-DIeR-UPB.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
