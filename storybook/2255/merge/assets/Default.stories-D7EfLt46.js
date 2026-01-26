import{j as r}from"./iframe-BWhqP90_.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-HbBBXO9Y.js";import{L as m}from"./Link-BBfbm5pk.js";import{H as s}from"./HeaderNavigation-DcFvxHjY.js";import{B as o}from"./Button-BciJVpgP.js";import{T as p}from"./Text-ClKyFsNf.js";import{I as h}from"./Image-BfrsyNPZ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-COiHlYJa.js";import{C as M,M as c}from"./ContextMenu-CLvJr5mp.js";import{C as I}from"./ContextMenuTrigger-217av2U0.js";import"./ContextMenuSection-DVcDBRAK.js";import{a as T,M as k}from"./Modal-CtihrLuU.js";import{H}from"./Heading-B5yfVGXK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./remote-veunNUGL.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./context-D1O-Xc3I.js";import"./utils-DDxNv25V.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./dynamic-B9fZ3_-n.js";import"./LoadingSpinner-CBZxi8OD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cDeaYk1j.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./useLabel-nvgQN0a7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-XxEUm-0T.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./Text-CjPzL55g.js";import"./AlertIcon-DpUh0dNd.js";import"./Switch-CdYB6wok.js";import"./useFieldComponent-YclMbw8e.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Ctp5-5Xw.js";import"./useFormReset-DqbCot7l.js";import"./useControlledState-hpfIa3L8.js";import"./VisuallyHidden-DRs-AG4l.js";import"./Dialog-CL817TCu.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./Action-CBNAKVRZ.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./Popover-S34byCU4.js";import"./useOverlayController-BDJ6Yr_G.js";import"./OverlayContextProvider-G1DVyXwK.js";import"./OverlayTrigger-CGA0SI1j.js";import"./DialogTriggerView-ByiatIwy.js";import"./Overlay-DMzDVV07.js";import"./ButtonView-38_4zC6p.js";import"./Flex-C6AoTlPK.js";import"./Heading-qBHW75oC.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
