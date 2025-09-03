import{j as r}from"./iframe-fiZAYE2W.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-CB_niWR5.js";import{L as m}from"./Link-D7tE5IKs.js";import{H as s}from"./HeaderNavigation-sLkXzOHZ.js";import{B as o}from"./Button-CPh6A0ie.js";import{T as p}from"./Text-BgnbdcU8.js";import{I as C}from"./Image-CMGgExJW.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DSU9zbd9.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DYpl0Nfb.js";import"./ContextMenuSection-J41LRAaq.js";import{a as D,M as E}from"./Modal-hFsS7g48.js";import{H as G}from"./Heading-MqLGOtOs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./context-0IVozT_C.js";import"./utils-sHGDZ6Zl.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-j57SM-Nw.js";import"./useFocus-Bwj4tK_H.js";import"./useFocusRing-B57qzYJa.js";import"./useFocusable-DMthjPSk.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DkSlR_xh.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./useLabel-8IHfk19G.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BJ9bzP1_.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./Text-H6cA9zz3.js";import"./AlertIcon-0l-2QG94.js";import"./Action-ZUtpVKh5.js";import"./context-BP9RYxVP.js";import"./useStatic-DK8KGoVH.js";import"./getActionGroupSlot-BXjTWZDP.js";import"./Popover-CAMcFRes.js";import"./DialogTriggerView-D_9nk-w4.js";import"./Dialog-CPiJaMak.js";import"./RSPContexts-DEEb3C3L.js";import"./OverlayArrow-CoJAbzkc.js";import"./useControlledState-Dazdo7hG.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./Group-BCt9JR72.js";import"./SearchField-CnjX_-ia.js";import"./FieldError-DfP4BUoL.js";import"./Form-BAG0Y1U9.js";import"./useTextField-CbBTT6Wa.js";import"./useFormReset-Du9grFIi.js";import"./TextField-qcgW8owJ.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./useCollator-BdIY4eGy.js";import"./FocusScope-BzxFGsrZ.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./Switch-B-V7diwy.js";import"./Label-CJVysa3_.js";import"./useToggleState-CIgZaHFJ.js";import"./Overlay-B9-qZz7Q.js";import"./ButtonView-DQZf1NvB.js";import"./Heading-D6rS-Kxf.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
