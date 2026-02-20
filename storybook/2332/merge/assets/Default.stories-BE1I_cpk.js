import{j as r}from"./iframe-B-dt22EB.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BbozUbXF.js";import{L as m}from"./Link-BI5jJCyV.js";import{H as s}from"./HeaderNavigation-hxETl5Wg.js";import{B as o}from"./Button-Cfktl1nd.js";import{T as p}from"./Text-BCqKdXYs.js";import{I as h}from"./Image-BCZQw-rb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-s1mi0UBn.js";import{C as M,M as c}from"./MenuItem-DE2PUUyS.js";import{C as I}from"./ContextMenuTrigger-CqEI6DDS.js";import"./ContextMenuSection-3gHTEPd_.js";import{M as T}from"./ModalTrigger-D94dI98n.js";import{M as k}from"./Modal-DawRBJrb.js";import{H}from"./Heading-8-mNxmV-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./remote-D6Q14pEz.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./utils-DoxtMd58.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-9GLlZYuH.js";import"./usePress-CgYKrzfD.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./dynamic-Ci7OcZKZ.js";import"./LoadingSpinner-ISzATTs8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjYcjBnT.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./Text-vBmBwiIT.js";import"./AlertIcon-B1kQf0Ru.js";import"./ActionBatch-DMUImU48.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./getActionGroupSlot-DUUveJ77.js";import"./Popover-52nhHqtt.js";import"./OverlayContextProvider-COc2hxmN.js";import"./Dialog-C7TrFuKD.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./Switch-N2fkKqP1.js";import"./useFieldComponent-D2j3Q6-m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DTz9iBTS.js";import"./useFormReset-BwldCtpD.js";import"./OverlayTrigger-MgjR2AzX.js";import"./DialogTriggerView-CegWLdtv.js";import"./Overlay-M9oVh3ML.js";import"./ButtonView-DMF5dkJg.js";import"./Flex-C5vlWmVo.js";import"./Heading-jN8dhiFm.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
