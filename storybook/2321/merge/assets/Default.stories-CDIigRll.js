import{j as r}from"./iframe-C_XCETJ4.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-D8ZYq2sU.js";import{L as m}from"./Link-DkaoxxaB.js";import{H as s}from"./HeaderNavigation-BYFr26NO.js";import{B as o}from"./Button-BRKehz01.js";import{T as p}from"./Text-l7AxHvJY.js";import{I as h}from"./Image-BZV1j-SR.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BE3_HRKs.js";import{C as M,M as c}from"./MenuItem-DwX_lsV_.js";import{C as I}from"./ContextMenuTrigger-CxmoahH1.js";import"./ContextMenuSection-D5WrvUWV.js";import{a as T,M as k}from"./Modal-CtVQOAXf.js";import{H}from"./Heading-42b9lNh5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./remote-BBIBCAlv.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./utils-Bso2FrGw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-D-vzktAn.js";import"./usePress-B-xR971w.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./dynamic-DjbOT4dP.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./useLabel-DQxA1BA6.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BQl26QHV.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./AlertIcon-Bo1DHsRX.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./Popover-Cr2hibE5.js";import"./useOverlayController-C6c2wWeg.js";import"./OverlayContextProvider-Ben69tTv.js";import"./Dialog-BbJdb0zX.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./Switch-BBdhhEu1.js";import"./useFieldComponent-K9rhjMxn.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChU4YOqm.js";import"./useFormReset-CmrFi5aC.js";import"./OverlayTrigger-lTtRcte7.js";import"./DialogTriggerView-DExfLcnX.js";import"./Overlay-ox9jeYqy.js";import"./ButtonView-CkPSl8Kd.js";import"./Flex-BLmE3ae7.js";import"./Heading-Cm7wIRHP.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
