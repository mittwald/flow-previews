import{j as r}from"./iframe-DCk1dltx.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Dty0OPVS.js";import{L as m}from"./Link-A1LlWMZC.js";import{H as s}from"./HeaderNavigation-B-G0y0-U.js";import{B as o}from"./Button-DZuynozn.js";import{T as p}from"./Text-BrHbgyhX.js";import{I as h}from"./Image-B4Jp7iii.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DmGd1gnf.js";import{C as M,M as c}from"./MenuItem-BJqicng5.js";import{C as I}from"./ContextMenuTrigger-C3DFOPM3.js";import"./ContextMenuSection-DnWeaq_7.js";import{a as T,M as k}from"./Modal-PzOU26v5.js";import{H}from"./Heading-DeB9aMje.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./remote-DvlevvD7.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./utils-dLBbTpD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Dg1ABCcr.js";import"./usePress-BwKHWgOu.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocusable-CjQRw48Z.js";import"./dynamic-BisWu7fc.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./useLabel-DUKklMlK.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CviVsCbd.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./AlertIcon-fe496zUR.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./Popover-D29W9ttZ.js";import"./useOverlayController-ChlOSDc8.js";import"./OverlayContextProvider-D8VTtXin.js";import"./Dialog-Cwy0OKAE.js";import"./RSPContexts-DsTbr3uT.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./Switch-W4EDz7FS.js";import"./useFieldComponent-DRONwAvB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-cVMrwpOM.js";import"./useFormReset-BYlFqKoc.js";import"./OverlayTrigger-B_1pmhgA.js";import"./DialogTriggerView-bFZONNC7.js";import"./Overlay-BztJ9LZk.js";import"./ButtonView-mTtK9nwk.js";import"./Flex-DFHxqI17.js";import"./Heading-CMNPfOZB.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
