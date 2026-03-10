import{j as r}from"./iframe-C1IdntWq.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BY-3yqWN.js";import{L as m}from"./Link-BJ-FjQ2E.js";import{H as s}from"./HeaderNavigation-1VXo3MiK.js";import{B as o}from"./Button-mSWnhOmK.js";import{T as p}from"./Text-W7h8_LNr.js";import{I as h}from"./Image-kYnAjVNm.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-RjhoB80e.js";import{C as M,M as c}from"./MenuItem-r8fJ3S7W.js";import{C as I}from"./ContextMenuTrigger-BD7zU6S1.js";import"./ContextMenuSection-Bx9t8tzE.js";import{M as T}from"./ModalTrigger-DKJvhsbF.js";import{M as k}from"./Modal-Cd8QIcZl.js";import{H}from"./Heading-CLkS-w3U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./remote-DdxKfasm.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./utils-CNo0qaX0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-HLQCbRtK.js";import"./usePress-BIzz4kJt.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./dynamic-CUpn0zgH.js";import"./LoadingSpinner-C4dBxxC2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./useLabel-CAzlzskU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./AlertIcon-CvmjcNLC.js";import"./ActionBatch-VQdQXkn7.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./Popover-BzNCFXu7.js";import"./OverlayContextProvider-Car-oabl.js";import"./Dialog-DaGSiRkj.js";import"./RSPContexts-DcVP09I4.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./Switch-DkM14R6w.js";import"./useFieldComponent-o_u9PYdj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DDHVFVTa.js";import"./useFormReset-CaX1fgpZ.js";import"./OverlayTrigger-B9t-MDtI.js";import"./DialogTriggerView-Uat21ICh.js";import"./Overlay-vUOl12kW.js";import"./ButtonView-UjagI0v2.js";import"./Flex-DyCVhYjZ.js";import"./Heading-BVXFLwsq.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
