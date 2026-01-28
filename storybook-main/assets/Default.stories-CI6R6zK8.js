import{j as r}from"./iframe-lb0QDBc2.js";import{q as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BeH6azjz.js";import{L as m}from"./Link-D3US6r6B.js";import{H as s}from"./HeaderNavigation-u0xaKSgm.js";import{B as o}from"./Button-juKgyftR.js";import{T as p}from"./Text-Bvo-yLEA.js";import{I as h}from"./Image-1_CotGtd.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CtTVpllB.js";import{C as M,M as c}from"./ContextMenu-Dv-q2EAf.js";import{C as I}from"./ContextMenuTrigger-CmiSzFi3.js";import"./ContextMenuSection-BhdaIGz3.js";import{a as T,M as k}from"./Modal-C_t96wST.js";import{H}from"./Heading-Be2qz7j6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./remote-HK64Xy28.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./utils-r2dAqIcX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-B48NrLMU.js";import"./usePress-CgYa4G9K.js";import"./useFocusRing-J18h0CnC.js";import"./useFocusable-BRnBN5zK.js";import"./dynamic-oimbFEy9.js";import"./LoadingSpinner-D-Hn99XA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3ym-GoV.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./useLabel-DBnvm8X4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./AlertIcon-DWhGd_Tx.js";import"./Switch-CjVVIn_n.js";import"./useFieldComponent-DzHSa8uO.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CuJBCnJp.js";import"./useFormReset-BIwT2nL6.js";import"./useControlledState-BS6Up44I.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./Dialog-21JmjHkj.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./Action-4cKKicYt.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./Popover-C9ioIy3o.js";import"./useOverlayController-DrUwu9jx.js";import"./OverlayContextProvider-kVRdTbI-.js";import"./OverlayTrigger-DJa2X_ri.js";import"./DialogTriggerView-CKqgs5pS.js";import"./Overlay-BWhYya0M.js";import"./ButtonView-BbORIuhL.js";import"./Flex-BBTrb2GJ.js";import"./Heading-BMdu11KH.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,Zr as default};
