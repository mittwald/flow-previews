import{j as r}from"./iframe-je41IZNf.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Bnxn-M7Y.js";import{L as m}from"./Link-D9QkJa0E.js";import{H as s}from"./HeaderNavigation-Bj5IuC3r.js";import{B as o}from"./Button-CKqcv5FO.js";import{T as p}from"./Text-BC-RZ7k4.js";import{I as h}from"./Image-CBQEKvMd.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DAEYxPtj.js";import{C as M,M as c}from"./MenuItem-DcJvwp72.js";import{C as I}from"./ContextMenuTrigger-D8i0SE5i.js";import"./ContextMenuSection-D3nZCtKg.js";import{M as T}from"./ModalTrigger-CM9OWBSC.js";import{M as k}from"./Modal-CPZv7ujk.js";import{H}from"./Heading-Bj867S3k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./remote-CVh73cse.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./utils-Q4wA2zXG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-YEPBe3OK.js";import"./usePress-BcrJWT2n.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./dynamic-BrtagzWP.js";import"./LoadingSpinner-DltTQrQc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./useLabel-_SRIQyLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./AlertIcon-g4_I2qja.js";import"./ActionBatch-ChKsIRTP.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./Popover-DIig3rOR.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./Dialog-BA8GDzQ6.js";import"./RSPContexts-u6z1ubPU.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./Switch-C6sIOBz7.js";import"./useFieldComponent-b8-F_AVa.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-IFAQ1815.js";import"./useFormReset-BAaFkhxA.js";import"./OverlayTrigger-Bv_i_Yla.js";import"./DialogTriggerView-hRXK0JzE.js";import"./Overlay-B0VzEzJb.js";import"./ButtonView-Dl5Y4ZWm.js";import"./Flex--JtxxRJ0.js";import"./Heading-0rwlvdDR.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
