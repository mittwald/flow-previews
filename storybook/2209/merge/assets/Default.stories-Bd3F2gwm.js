import{j as r}from"./iframe-CcUuYubL.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-BDjC6xOL.js";import{L as m}from"./Link-giJ9SIo4.js";import{H as s}from"./HeaderNavigation-CRJiveWY.js";import{B as o}from"./Button-hsF3uCN8.js";import{T as p}from"./Text-DY9Wsurd.js";import{I as h}from"./Image-Qf_9qGF2.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D79A-b2Q.js";import{C as M,M as c}from"./MenuItem-C4D-ndg_.js";import{C as I}from"./ContextMenuTrigger-CxCv85OI.js";import"./ContextMenuSection-DMta75t3.js";import{a as T,M as k}from"./Modal-Dc_f8AOU.js";import{H}from"./Heading-BKl3Ob1v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./remote-DfJLRaxN.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./context-BiAKFHSE.js";import"./utils-B3A9CwVo.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./dynamic-BvCZ3AJL.js";import"./LoadingSpinner-BSrbl83B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-Fqqf34.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./useLabel-4jeMa91n.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./AlertIcon-CFwObQfk.js";import"./Action-B5lNwIyS.js";import"./context-BjvrdVaN.js";import"./useStatic-DtEAcyvY.js";import"./getActionGroupSlot-COit0AjF.js";import"./Popover-DmUHZ-tA.js";import"./useOverlayController-fROC4phl.js";import"./OverlayContextProvider-Br3sAK21.js";import"./Dialog-mDFWR8fO.js";import"./RSPContexts-CCIxlK1Q.js";import"./OverlayArrow-LMNtsg17.js";import"./useControlledState-Cd7zGKC9.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";import"./Switch-CoWfQ2jB.js";import"./useFieldComponent-DfHGJXnI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BWrwaeJV.js";import"./useFormReset-CtXF-ibf.js";import"./OverlayTrigger-DwWDWrw1.js";import"./DialogTriggerView-CdXktG9k.js";import"./Overlay-kdVsqDAt.js";import"./ButtonView-B9OefHoq.js";import"./Flex-Bv2e09uM.js";import"./Heading-DhOjZbSl.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
