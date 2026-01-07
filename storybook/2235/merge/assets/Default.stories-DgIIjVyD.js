import{j as r}from"./iframe-Dnm846PF.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CExbEpDP.js";import{L as m}from"./Link-CvmmRiOt.js";import{H as s}from"./HeaderNavigation-BgMt3aGq.js";import{B as o}from"./Button-D3IXyzzj.js";import{T as p}from"./Text-DtZxu6g8.js";import{I as h}from"./Image-K9DYUJ63.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CUcr9Fyg.js";import{C as M,M as c}from"./MenuItem-Dzhk-iiZ.js";import{C as I}from"./ContextMenuTrigger-DPg2ZRwx.js";import"./ContextMenuSection-C10PM8Bo.js";import{a as T,M as k}from"./Modal-CWTKDO-a.js";import{H}from"./Heading-DIDy3S_I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./remote-XcyFsW5Q.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./utils-VDIU0BnD.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CU4gAXU4.js";import"./useFocus-D-7SE4fF.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./dynamic-CwAvPpRM.js";import"./LoadingSpinner-DASF7rgv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-4mNKoj.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./useLabel-pLNL7Cvk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./AlertIcon-7aOFMVRI.js";import"./Action-emK0mmvz.js";import"./context-CfRQ154N.js";import"./useStatic-D4cjHvMF.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./Popover-D8u9A93l.js";import"./useOverlayController-D7G3MHJE.js";import"./OverlayContextProvider-e7mKKUrq.js";import"./Dialog-BfuTmdIH.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./VisuallyHidden-C6zUvnKf.js";import"./Switch-DT-bdce6.js";import"./useFieldComponent-CW3QYPg0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CR5d2iTy.js";import"./useFormReset-BiFYZY7a.js";import"./OverlayTrigger-D2F_jz3v.js";import"./DialogTriggerView-By1KcQyW.js";import"./Overlay-BMhiI98R.js";import"./ButtonView-BMLSQLb1.js";import"./Flex-hbQzFHSk.js";import"./Heading-BVtLIbvB.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
