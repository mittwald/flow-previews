import{j as r}from"./iframe-BmKAGSU1.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-imbji-Kz.js";import{L as m}from"./Link-LBnBpt3Y.js";import{H as s}from"./HeaderNavigation-Bdnb2c1G.js";import{B as o}from"./Button-LvEI1uQm.js";import{T as p}from"./Text-C9Y-BRqi.js";import{I as h}from"./Image-CBHdImMa.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CWXxF6yE.js";import{C as M,M as c}from"./MenuItem-DDoaQ5gq.js";import{C as I}from"./ContextMenuTrigger-DS235DeN.js";import"./ContextMenuSection-ChJFKHwG.js";import{a as T,M as k}from"./Modal-DP7ovVU8.js";import{H}from"./Heading-DYtAXBUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./index-D3Sif_iZ.js";import"./remote-DfYMV5Tv.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./context-CxuOL-5x.js";import"./utils-g5fx1pEf.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-JhlebSO6.js";import"./useFocus-BW6_4Fc3.js";import"./useFocusRing-DBug8spT.js";import"./useFocusable-BP0ye7iu.js";import"./dynamic-4IbUBFl1.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5vvsijg.js";import"./ProgressBar-Cladi115.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./useLabel-gR0_832q.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-SWtWUPW6.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./AlertIcon-C_ldaOZy.js";import"./Action-DOyYDw1l.js";import"./context-B4Nnt3qw.js";import"./useStatic-7Dbn5SyA.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./Popover-BiEUztWm.js";import"./useOverlayController-BB86-6rb.js";import"./OverlayContextProvider-BxylxdNW.js";import"./Dialog-DjPgQ4DH.js";import"./RSPContexts-BuF39hXg.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useControlledState-TVCSEq66.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";import"./Switch-CD7ycCk9.js";import"./useFieldComponent-DWe8fYc4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B_d02MBE.js";import"./useFormReset-DXCfJDY-.js";import"./OverlayTrigger-CUUsPguv.js";import"./DialogTriggerView-BLuWoWSE.js";import"./Overlay-BUq6JItd.js";import"./ButtonView-BFGHLm5m.js";import"./Flex-Db5OtYih.js";import"./Heading-Daf9Kt-W.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
