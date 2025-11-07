import{j as r}from"./iframe-BD-_0iQW.js";import{B as o}from"./Button-Daqq-bhO.js";import{A as l}from"./ActionGroup-L6iCTp2m.js";import{a6 as p,a7 as d}from"./Modal-DAvTyZys.js";import{I as n}from"./Image-wyVjZedI.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-COe6pc-P.js";import{u as h}from"./Popover-CLHMqo5N.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./Text-BiRW2WuP.js";import"./browser-CsfwbWLp.js";import"./utils-DC-uQ7gt.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVtdtufW.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./dynamic-Bn8R82lj.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";import"./OverlayTrigger-CEYU_-ng.js";import"./Dialog-B7aUPBh_.js";import"./RSPContexts-CSfMLF9v.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./ControlledNotification-B9B4fBZF.js";import"./context-9lnVgACy.js";import"./LayoutCard-Bu_MxQLX.js";import"./Accordion-Dmvu-STy.js";import"./Action-DGkp9jQR.js";import"./Alert-BHqt2Xmz.js";import"./AlertIcon-C-1FhtD4.js";import"./AlertBadge-C_bKX3Tw.js";import"./Align-BU9LqP1d.js";import"./TableFooterRow-Dh87MABj.js";import"./SkeletonText-BEBErV7l.js";import"./ClearPropsContextView-C6q86AoL.js";import"./Avatar-ptAthZyD.js";import"./AvatarStack-pX77Wx2n.js";import"./Badge-Cq8W5IuK.js";import"./BigNumber-BZMSwxWy.js";import"./Breadcrumb-B_2EqmLA.js";import"./Link--c0KgJdM.js";import"./Heading-CKSpOG-B.js";import"./Legend-Dt8JNF07.js";import"./FileCardList-CoobVF0p.js";import"./CodeBlock-B7SIDcrt.js";import"./CopyButton-DNanLKd-.js";import"./Tooltip-CQSPANHc.js";import"./react-children-utilities-CYfepbhx.js";import"./Color-CKMFQpU8.js";import"./Content-D_2aIVNk.js";import"./Section-Bcwz73Fs.js";import"./Label-BHkQ1Mdn.js";import"./ContextualHelpTrigger-ChW-2k3k.js";import"./CounterBadge-zIMO9qVK.js";import"./DonutChart--oUMGKT6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGcFcvk0.js";import"./Header-w0dLREy2.js";import"./Initials-sAJyyrQ_.js";import"./InlineCode-DOqa4S9W.js";import"./LabeledValue-BJ2qJMnJ.js";import"./PopoverTrigger-DQLZ359g.js";import"./Markdown-gIXFEqIp.js";import"./Separator-BuhULCN1.js";import"./Message-D5ycG96F.js";import"./MessageSeparator-1pn-RMid.js";import"./NavigationGroup-D-BaHXXX.js";import"./Notification-Bk0gzbnY.js";import"./NotificationProvider-DDhJ45Ji.js";import"./ProgressBar-B3o_BSDC.js";import"./Rating-BN3HDW9p.js";import"./Skeleton-C5PIlGkF.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};const Xr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Xr as __namedExportsOrder,Vr as default};
