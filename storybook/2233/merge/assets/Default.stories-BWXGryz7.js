import{j as r}from"./iframe-BUX4ZqHF.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CQ3vdTUk.js";import{L as m}from"./Link-CRkcacII.js";import{H as s}from"./HeaderNavigation-Cu-g5CmR.js";import{B as o}from"./Button-BQks1Fwk.js";import{T as p}from"./Text-CCD2jWDE.js";import{I as h}from"./Image-BM9mKDmk.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BRdiAgaH.js";import{C as M,M as c}from"./ContextMenu-tsJODFLg.js";import{C as I}from"./ContextMenuTrigger-CMnatttX.js";import"./ContextMenuSection-B-plY6qU.js";import{a as T,M as k}from"./Modal-Czh_keaP.js";import{H}from"./Heading-CZDnCkj5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./remote-CM65cF_Q.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./context-DdyqVFXP.js";import"./utils-D9iTInv6.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./dynamic-C-JL21_Y.js";import"./LoadingSpinner-DAzOOzOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./useLabel-DVc7LJa4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D0x3Xdqp.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./AlertIcon-B17jmh6q.js";import"./Switch-nGoYDFon.js";import"./useFieldComponent-L2xw4dQD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CgrRGd3M.js";import"./useFormReset-DwYjTvSA.js";import"./useControlledState-CgyNYXn6.js";import"./VisuallyHidden-CEZo4IbP.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./Action-BoSxlb-x.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./Popover-Cjs7ZgFB.js";import"./useOverlayController-Di9xJg3a.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./OverlayTrigger-DrYjWhwY.js";import"./DialogTriggerView-B2D5-Lnb.js";import"./Overlay-B_W0JVFy.js";import"./ButtonView-BL_EZlKK.js";import"./Flex-CBDkJDwf.js";import"./Heading-Dcla-H3e.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
