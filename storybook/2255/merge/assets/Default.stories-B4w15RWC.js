import{j as r}from"./iframe-CO_SbVCH.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DnAYmwAM.js";import{L as m}from"./Link-Errn0UdC.js";import{H as s}from"./HeaderNavigation-iuMkwvBl.js";import{B as o}from"./Button-D1ylE5rB.js";import{T as p}from"./Text-DxwcuI28.js";import{I as h}from"./Image-CmTrsb2g.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CHREJjs8.js";import{C as M,M as c}from"./ContextMenu-Dud2i_HV.js";import{C as I}from"./ContextMenuTrigger-DNNBan8l.js";import"./ContextMenuSection-m6biFtp2.js";import{a as T,M as k}from"./Modal-Cc5dqVLi.js";import{H}from"./Heading-CF6gKKdb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./index-CiuYSwxA.js";import"./remote-CpzHRyGl.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./context-CagKbUB8.js";import"./utils-D6Fob7yO.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./dynamic-7BzGeVfl.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./useLabel-Dm4P9x_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DqZUP5aL.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./AlertIcon-3Vdm-iqE.js";import"./Switch-fAFJ-mWl.js";import"./useFieldComponent-DVhqfPKz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-9K6TRVAf.js";import"./useFormReset-DQMHGRs0.js";import"./useControlledState-BplPLiu_.js";import"./VisuallyHidden-DDIsYkXL.js";import"./Dialog-UmHwq-hs.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./Action-0SsHJzT_.js";import"./context-BbDJJF8K.js";import"./useStatic-D6cqHfiz.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./Popover-Dm9PqtUw.js";import"./useOverlayController-2Ut0kNT7.js";import"./OverlayContextProvider-6b1aLjhJ.js";import"./OverlayTrigger-zJBbildq.js";import"./DialogTriggerView-hBiyDoeN.js";import"./Overlay-BnRy0K17.js";import"./ButtonView-Cwch5mTd.js";import"./Flex-BtfNHwzQ.js";import"./Heading-Ij8bChZd.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
