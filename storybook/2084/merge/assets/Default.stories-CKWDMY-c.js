import{j as r}from"./iframe-BJcrhiyS.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-DHKN92dZ.js";import{L as m}from"./Link-Btgj-tjP.js";import{H as s}from"./HeaderNavigation-JVVJ9h2B.js";import{B as o}from"./Button-DDexK_tB.js";import{T as p}from"./Text-CzGb6jtw.js";import{I as h}from"./Image-DwNgkPJb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BzTJ5xS-.js";import{C as M,M as c}from"./MenuItem-IgHUZf_i.js";import{C as I}from"./ContextMenuTrigger-Co3M4dKW.js";import"./ContextMenuSection-B4NyQI2O.js";import{a as T,M as k}from"./Modal-34R3xxiF.js";import{H}from"./Heading-CUXx9jgP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./index-Clh-7_IP.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./utils-MMz0RNDK.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-D-MZIwgU.js";import"./useFocus-B02RLksg.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocusable-o2EAaEwJ.js";import"./dynamic-D98kNBqL.js";import"./LoadingSpinner-DIhYtINq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLFIfSVU.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./useLabel-_fpNspWn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CleZYiuo.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./AlertIcon-Bj9aQqIk.js";import"./Action-Cl9B75AE.js";import"./context-OYcKy-iK.js";import"./useStatic-DD6IIAig.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./Popover-BdgkNI5W.js";import"./useOverlayController-Dw6LvLP7.js";import"./OverlayContextProvider-DM6mTtug.js";import"./Dialog-BQ_EXD94.js";import"./RSPContexts-C2e5xu0T.js";import"./OverlayArrow-DSSzOs3h.js";import"./useControlledState-CmFRf9bT.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";import"./ClearPropsContextView-Bpe56eb-.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./Switch-a7sHY69M.js";import"./useFieldComponent-BTSjCSDH.js";import"./react-children-utilities-DZ5iFmYj.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CqrVk7-z.js";import"./useToggleState-CvOmtPpp.js";import"./useFormReset-B4UK9p8r.js";import"./OverlayTrigger-D4TYFed6.js";import"./ControlledNotification-BDMyAvnK.js";import"./DialogTriggerView-DgLtb_sd.js";import"./Overlay-CagNAbH0.js";import"./ButtonView-BcPdxPf9.js";import"./Heading-DJUV0n03.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
