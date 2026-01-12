import{j as r}from"./iframe-DpNCYkDX.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CcmUiij-.js";import{L as m}from"./Link-Cz3IrAwQ.js";import{H as s}from"./HeaderNavigation-y2zk2nq5.js";import{B as o}from"./Button-CB8TQqfw.js";import{T as p}from"./Text-Bp6u83O8.js";import{I as h}from"./Image-C00TlK2K.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CIZEvz05.js";import{C as M,M as c}from"./ContextMenu-OcuJV2Fv.js";import{C as I}from"./ContextMenuTrigger-yAw9v6sT.js";import"./ContextMenuSection-BWIiCJCm.js";import{a as T,M as k}from"./Modal-o4wnxslF.js";import{H}from"./Heading-CdQ6Kdnh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./remote-FHZXAXl3.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./context-Df7wrknH.js";import"./utils-YaT_C2bO.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-OMCV4DY8.js";import"./useFocus-CLy8_GQ0.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./dynamic-DOXkjdco.js";import"./LoadingSpinner-mT2tjpr6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./useLabel-DtioSroH.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BfCz5g6M.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./AlertIcon-CnmOZB_U.js";import"./Switch-BT_hjZHG.js";import"./useFieldComponent-CtyBuaGz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CyQnmxcJ.js";import"./useFormReset-BsRaFjct.js";import"./useControlledState-CFzFCELG.js";import"./VisuallyHidden-BhiVW_d3.js";import"./Dialog-DtZU9YT9.js";import"./RSPContexts-_XCAh6rU.js";import"./OverlayArrow-DaAbsuct.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./useStatic-C-pVfuV7.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./Popover-DuuviGb9.js";import"./useOverlayController-B8UZSZKi.js";import"./OverlayContextProvider-Cg977AbI.js";import"./OverlayTrigger-BclobJ22.js";import"./DialogTriggerView-D0souyoJ.js";import"./Overlay-vbGMwDtu.js";import"./ButtonView-BetzdRmg.js";import"./Flex-CdzAbSzJ.js";import"./Heading-Cba33pi1.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
