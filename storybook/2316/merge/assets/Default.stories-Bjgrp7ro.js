import{j as r}from"./iframe-B___tkgA.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DnK3ATSm.js";import{L as m}from"./Link-D6dpLRQi.js";import{H as s}from"./HeaderNavigation-CRCoDS5R.js";import{B as o}from"./Button-CK4qYUON.js";import{T as p}from"./Text-C5KW7r-3.js";import{I as h}from"./Image-BvgdGIcm.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DgDPxRQK.js";import{C as M,M as c}from"./MenuItem-DcpEHUUA.js";import{C as I}from"./ContextMenuTrigger-BVEbbbmS.js";import"./ContextMenuSection-BssuI41M.js";import{a as T,M as k}from"./Modal-CQVs8Y__.js";import{H}from"./Heading-LM5CzMob.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./index-2yYueaxI.js";import"./remote-CwYVL4Pl.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./utils-BoKG2kRw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-x-GTmi1B.js";import"./usePress-XNzvlEPV.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./dynamic-BEuCOou2.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C6gsgKxf.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./AlertIcon-COjYyYJX.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./useStatic-DSdFfo4Y.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./Popover-C7J9xDtg.js";import"./useOverlayController-eJqKV_lL.js";import"./OverlayContextProvider-CZtKT-tq.js";import"./Dialog-SqXlQhu9.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./Switch-HXSiSYTh.js";import"./useFieldComponent-vfbWFIJK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgOt3Jhs.js";import"./useFormReset-BMzMnmaN.js";import"./OverlayTrigger-29xp9YbL.js";import"./DialogTriggerView-Do-fPtKV.js";import"./Overlay-DWB2_Sq1.js";import"./ButtonView-B7YCzKos.js";import"./Flex-CDU-l2sG.js";import"./Heading-2NkxAW1G.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
