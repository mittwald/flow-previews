import{j as r}from"./iframe-BB26x0WO.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-xtBRgQwR.js";import{L as m}from"./Link-Bbuns-ax.js";import{H as s}from"./HeaderNavigation-TibHk1JN.js";import{B as o}from"./Button-BTY4YrG_.js";import{T as p}from"./Text-CVJJy1PS.js";import{I as h}from"./Image-Du3loSXk.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-B0PIZIjb.js";import{C as M,M as c}from"./ContextMenu-BR94seEU.js";import{C as I}from"./ContextMenuTrigger-BcfkOMVx.js";import"./ContextMenuSection-DGimkJAp.js";import{a as T,M as k}from"./Modal-BnGXIFV3.js";import{H}from"./Heading-DjuXjgcE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./remote-BOIRgCVv.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./utils-B0cjT-cu.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./dynamic-iWxR2zWf.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CM4yKXDn.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./AlertIcon-8w60vasN.js";import"./Switch-DEmlbzrx.js";import"./useFieldComponent-uqIFFsha.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C0CJHC_W.js";import"./useFormReset-DftD3Tx4.js";import"./useControlledState-Bi3RtZ50.js";import"./VisuallyHidden-GAE_mByz.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./useStatic-CBwNmb4h.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./Popover-Bk5Shd0d.js";import"./useOverlayController-CrgCUZX_.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./OverlayTrigger-CBbEoXQd.js";import"./DialogTriggerView-BVHd8_RR.js";import"./Overlay-OtXuapCS.js";import"./ButtonView-DHrXopea.js";import"./Flex-DJuYttvb.js";import"./Heading-CYNLL9tG.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
