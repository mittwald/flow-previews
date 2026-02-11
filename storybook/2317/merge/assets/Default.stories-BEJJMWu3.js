import{j as r}from"./iframe-C_YE0yRE.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Cxe6oNxX.js";import{L as m}from"./Link-DJvldIWm.js";import{H as s}from"./HeaderNavigation-DbMuUZ94.js";import{B as o}from"./Button-D40FTP7t.js";import{T as p}from"./Text-DHPE0I2s.js";import{I as h}from"./Image-C_-0Cxtg.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BoYy0FvN.js";import{C as M,M as c}from"./MenuItem-C8HSkuUG.js";import{C as I}from"./ContextMenuTrigger-G_k9Jgni.js";import"./ContextMenuSection-DRxdJG8v.js";import{a as T,M as k}from"./Modal-wdhna7c-.js";import{H}from"./Heading-Bwe8YU0o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./remote-C68UFTqR.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./context-BsGh4Cu8.js";import"./utils-DHqPz2V6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CNnZns0Y.js";import"./usePress-DNy1k_Tf.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./dynamic-DNhRkZnt.js";import"./LoadingSpinner-CWKEQFJy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRed6E24.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./useLabel-C_Wx6KRi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BLJ3u5oR.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./AlertIcon-ClTjLU4k.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./getActionGroupSlot-C_onwoh9.js";import"./Popover-BcERq8Yi.js";import"./useOverlayController-DmoYfzmu.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./Dialog-BXH836dM.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./VisuallyHidden-DZpEB13Q.js";import"./Switch-ChyQ_IKG.js";import"./useFieldComponent-CWA258Fl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B8Rf9xQv.js";import"./useFormReset-CEMPEkJX.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./DialogTriggerView-BiUKHl-a.js";import"./Overlay-CI7W6mo1.js";import"./ButtonView-U1F2-uB-.js";import"./Flex-LL1Hy7tF.js";import"./Heading-BsEG12w_.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
