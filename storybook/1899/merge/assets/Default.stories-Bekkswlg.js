import{j as r}from"./iframe-Bgax2JY0.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-CIEL4Pty.js";import{L as m}from"./Link-CQnxlnzM.js";import{H as s}from"./HeaderNavigation-DMYqIMDR.js";import{B as o}from"./Button-DorhvjcK.js";import{T as p}from"./Text-D6HIqkzL.js";import{I as C}from"./Image-BhFqgQwP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CXO9Oha6.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Bp5CzhdX.js";import"./ContextMenuSection-DGFiszVN.js";import{a as D,M as E}from"./Modal-p-yETAHJ.js";import{H as G}from"./Heading-n6h-YqbY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CmOrLwYQ.js";import"./mergeRefs-1LV-M9lp.js";import"./index-B-5I2LyG.js";import"./useLocalizedStringFormatter-uMxvRbqB.js";import"./context-Bb8mc0Vr.js";import"./utils-DhvHJ7nc.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-g-wt-ENC.js";import"./useFocus-Bodxhf8B.js";import"./useFocusRing-DcvKFQyA.js";import"./useFocusable-Bp4ESZkx.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Bv666wXE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DgAfNMgE.js";import"./ProgressBar-CZQ_VFpR.js";import"./Label-qLOfPpHT.js";import"./Hidden-DMxEzFkJ.js";import"./useLabel-tzcBKB-Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CNVsKzoy.js";import"./EmulatedBoldText-CcxcoryL.js";import"./Text-BnSb9DeM.js";import"./AlertIcon-Biz73IKY.js";import"./Action-BPNog73Z.js";import"./context-CPunWrMu.js";import"./useStatic-DXnsBsC9.js";import"./getActionGroupSlot-dcXhdsbk.js";import"./Popover-BBsOjuSg.js";import"./DialogTriggerView-oUhD9ZXx.js";import"./Dialog-BurARqGL.js";import"./RSPContexts-P0zhp91u.js";import"./OverlayArrow-CYHIASrt.js";import"./useControlledState-ac1T2b60.js";import"./Collection-Dtx_2tJr.js";import"./CollectionBuilder-D9WqczC4.js";import"./Separator-DIslfa6e.js";import"./Group-YM833BDX.js";import"./SearchField-kAL_jkdT.js";import"./FieldError-DcSiOcsV.js";import"./Form-CqpGTvbl.js";import"./useTextField-B7zXE9Jf.js";import"./useFormReset-CYQ4wC1P.js";import"./TextField-CBK-xjEz.js";import"./useEvent-BaDyCPVa.js";import"./SelectionManager-CESmDrfy.js";import"./useCollator-DvCxePvq.js";import"./FocusScope-BkaPqd68.js";import"./VisuallyHidden-Dl-5RC8j.js";import"./Switch-D7CGIMlH.js";import"./Label-_IXUlREC.js";import"./useToggleState-D8iyf-Uo.js";import"./Overlay-2yRhPbpg.js";import"./ButtonView-CpGb_C9q.js";import"./Heading-BzsP0wx8.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
