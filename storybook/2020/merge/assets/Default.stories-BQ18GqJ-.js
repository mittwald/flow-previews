import{j as r}from"./iframe-MIRc1tgM.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-0xUxCYxJ.js";import{L as m}from"./Link-r9h-e9yX.js";import{H as s}from"./HeaderNavigation-D1Bf7xj7.js";import{B as o}from"./Button-JGTIxpZE.js";import{T as p}from"./Text-DB0aA-4n.js";import{I as C}from"./Image-DkLsW5Ae.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BCH7wScK.js";import{b as y,C as A,M as c}from"./ContextMenuSection-T61eJ4bk.js";import{a as D,M as E}from"./Modal-JEIy-zuF.js";import{H as G}from"./Heading-CpZU4iUX.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./context-7dZHwnb1.js";import"./utils-Wg8-dAbi.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BoYI9IsN.js";import"./useFocus-D5-sLX53.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocusable-42wCCaNx.js";import"./dynamic-C-bCBCeB.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bb1_Qr-8.js";import"./ProgressBar-DSHI0B5V.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./useLabel-BYf9ahG7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Text-CqfOq6kd.js";import"./AlertIcon-B3E5_sC_.js";import"./Action-C4w8f-qm.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./RSPContexts-TWbyIvJO.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useControlledState-hbnLpfLJ.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./context-gIAWaTnY.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Switch-CTyi_YgO.js";import"./Label-6ip-YDAK.js";import"./useToggleState-xo7F0lbz.js";import"./useFormReset-BLfHAfi4.js";import"./Overlay-9bJ8Txur.js";import"./ButtonView-xuyufIew.js";import"./Heading-Doke7kKe.js";const Jr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Kr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Kr as __namedExportsOrder,Jr as default};
