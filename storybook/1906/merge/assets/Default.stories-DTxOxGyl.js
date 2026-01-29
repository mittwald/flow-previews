import{j as r}from"./iframe-DzPnzOIh.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Dnclh3SV.js";import{L as m}from"./Link-BR25-tT4.js";import{H as s}from"./HeaderNavigation-CY5QTO7l.js";import{B as o}from"./Button-B0xxYjKh.js";import{T as p}from"./Text-CgXXsRbz.js";import{I as h}from"./Image-e5kdeDYd.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DxrbUwf8.js";import{C as M,M as c}from"./MenuItem-YrPJ9QyW.js";import{C as I}from"./ContextMenuTrigger-DvdHPi80.js";import"./ContextMenuSection-DfF2Gqpp.js";import{a as T,M as k}from"./Modal-DzXGnCa9.js";import{H}from"./Heading-DPjRgByp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./index-nNa6hI3H.js";import"./remote-Df33k4AK.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./utils-DdPADezN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-lCD3lNhC.js";import"./usePress-COgw0Owx.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./dynamic-CR1FGrpS.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DO1on-Lg.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./AlertIcon-BAMux0CS.js";import"./Action-D4qqw_zO.js";import"./context-CvuQDK5p.js";import"./useStatic-B5sjyhg8.js";import"./getActionGroupSlot-BseyWuGA.js";import"./Popover-DeK_Y-I_.js";import"./useOverlayController-DuzP2i3a.js";import"./OverlayContextProvider-DbqQHSiT.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./Switch-Byyg-dLh.js";import"./useFieldComponent-DttoHSbm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChWYNK0o.js";import"./useFormReset-D5TocNhH.js";import"./OverlayTrigger-DzqcF9yd.js";import"./DialogTriggerView-B9OP3Ay_.js";import"./Overlay-BcglKVzv.js";import"./ButtonView-DAqv122X.js";import"./Flex-B4Vxhcf6.js";import"./Heading-Dqw827jw.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
