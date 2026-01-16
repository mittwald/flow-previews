import{j as r}from"./iframe-DEsugzBP.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-qDYXGw-D.js";import{L as m}from"./Link-DfJDbkJP.js";import{H as s}from"./HeaderNavigation-Cmies_bq.js";import{B as o}from"./Button-Bh57nksp.js";import{T as p}from"./Text-CGG2whlc.js";import{I as h}from"./Image-nvqBBkX_.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D8O5X1wo.js";import{C as M,M as c}from"./ContextMenu-BANunSHH.js";import{C as I}from"./ContextMenuTrigger-CXVNrJjA.js";import"./ContextMenuSection-EcetDiW1.js";import{a as T,M as k}from"./Modal-Bo1-jO8h.js";import{H}from"./Heading-Di_kcqRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./remote-Bm53ArvY.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./utils-k3goWFVI.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CsaWzeZC.js";import"./useFocus-B3AZuBYY.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./dynamic-FU-wbqWq.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./useLabel-Bn9RRRKS.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./AlertIcon-CMe_dxq6.js";import"./Switch-CAaYMs_g.js";import"./useFieldComponent-CoV9Rbdv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BtYhbPhR.js";import"./useFormReset-D1Ly9aDH.js";import"./useControlledState-Dcr_irR6.js";import"./VisuallyHidden-DVFgokJG.js";import"./Dialog-B0UO0Xtu.js";import"./RSPContexts-BS5BTC1y.js";import"./OverlayArrow-CBh5kmtO.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./Action-DUjscWwq.js";import"./context-20QbnAW8.js";import"./useStatic-BMQe5ifs.js";import"./getActionGroupSlot-d_28ev7h.js";import"./Popover-CHiAjpaQ.js";import"./useOverlayController-Bq883NOw.js";import"./OverlayContextProvider-CajcDkAh.js";import"./OverlayTrigger-CImrZmh1.js";import"./DialogTriggerView-BEasOqHk.js";import"./Overlay-7Lf-PQAv.js";import"./ButtonView-CimpCjSg.js";import"./Flex-aswULlNk.js";import"./Heading-B1qRR7lK.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
