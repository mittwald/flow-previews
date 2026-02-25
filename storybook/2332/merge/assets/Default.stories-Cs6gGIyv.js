import{j as r}from"./iframe-DCel2PhG.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CNMqfC0c.js";import{L as m}from"./Link-Dn3de3aq.js";import{H as s}from"./HeaderNavigation-BfHzCoQn.js";import{B as o}from"./Button-CjhaH8vt.js";import{T as p}from"./Text-CfcNN3C1.js";import{I as h}from"./Image-D0BCigkQ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BAfAUkRe.js";import{C as M,M as c}from"./MenuItem-0Ul2h7hK.js";import{C as I}from"./ContextMenuTrigger-DigcAnLh.js";import"./ContextMenuSection-DVvHUSFD.js";import{M as T}from"./ModalTrigger-aCNkgMXh.js";import{M as k}from"./Modal-V5k8QPuM.js";import{H}from"./Heading-DPAdBgTw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./index-DcvCSlSd.js";import"./remote-MfAOzJwE.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./utils-jFfJrK0I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BSXyJlKK.js";import"./usePress-l6QeQysM.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./dynamic-CoRoJ1gY.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";import"./AlertIcon-C6GnHejw.js";import"./ActionBatch-BNnkW8Wa.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./Popover-C8zyal55.js";import"./OverlayContextProvider-BfHmVY35.js";import"./Dialog-BnrJ3EGg.js";import"./RSPContexts-BWRH8UQz.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./Switch-2vH7zbnN.js";import"./useFieldComponent-CWMmv0d5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RRCYx7Po.js";import"./useFormReset-DvzBERJE.js";import"./OverlayTrigger-BYr1biz5.js";import"./DialogTriggerView-DSaShoc1.js";import"./Overlay-LFamQv73.js";import"./ButtonView--o7XYYP5.js";import"./Flex-tHl6Xyli.js";import"./Heading-Cs7GlIOt.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
